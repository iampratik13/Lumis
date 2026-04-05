# ===============================
# IFC EXPORTER
# ===============================

import ifcopenshell


def update_ifc(input_ifc, output_ifc, elements):
    model = ifcopenshell.open(input_ifc)

    element_map = {e["id"]: e for e in elements}

    count = 0

    for obj in model:

        if hasattr(obj, "GlobalId") and obj.GlobalId in element_map:

            e = element_map[obj.GlobalId]

            try:
                xmin, ymin, zmin = e["bbox_min"]
                xmax, ymax, zmax = e["bbox_max"]

                cx = (xmin + xmax) / 2
                cy = (ymin + ymax) / 2
                cz = (zmin + zmax) / 2

                if obj.ObjectPlacement:
                    placement = obj.ObjectPlacement

                    if hasattr(placement, "RelativePlacement"):
                        location = placement.RelativePlacement.Location

                        location.Coordinates = (cx, cy, cz)

                        count += 1

            except:
                pass

    print(f"Updated {count} elements")

    model.write(output_ifc)
    print(f"Saved: {output_ifc}")