# ===============================
# IFC PARSER (IFC2X3 COMPATIBLE)
# ===============================

import ifcopenshell
import ifcopenshell.geom
import numpy as np


def load_ifc(file):
    return ifcopenshell.open(file)


def get_bbox(element, settings):
    shape = ifcopenshell.geom.create_shape(settings, element)
    verts = np.array(shape.geometry.verts).reshape(-1, 3)

    return verts.min(axis=0).tolist(), verts.max(axis=0).tolist()


def extract_elements(ifc_file):
    model = load_ifc(ifc_file)

    settings = ifcopenshell.geom.settings()
    settings.set(settings.USE_WORLD_COORDS, True)

    elements = []

    # IFC2X3 DOES NOT HAVE IfcPipeSegment / IfcDuctSegment
    # USE GENERIC FLOW ELEMENTS INSTEAD

    flow_segments = model.by_type("IfcFlowSegment")
    flow_fittings = model.by_type("IfcFlowFitting")

    print("Flow Segments:", len(flow_segments))
    print("Flow Fittings:", len(flow_fittings))

    # -------------------------------
    # TREAT FLOW SEGMENTS AS PIPES
    # -------------------------------
    for e in flow_segments:
        try:
            bmin, bmax = get_bbox(e, settings)

            elements.append({
                "id": e.GlobalId,
                "type": "pipe",
                "bbox_min": bmin,
                "bbox_max": bmax
            })
        except:
            pass

    # -------------------------------
    # TREAT FLOW FITTINGS AS OBSTACLES
    # -------------------------------
    for e in flow_fittings:
        try:
            bmin, bmax = get_bbox(e, settings)

            elements.append({
                "id": e.GlobalId,
                "type": "duct",
                "bbox_min": bmin,
                "bbox_max": bmax
            })
        except:
            pass

    print("Total extracted elements:", len(elements))

    return elements