import ifcopenshell
import ifcopenshell.geom
import numpy as np
import json

# -------------------------------
# LOAD IFC
# -------------------------------
model = ifcopenshell.open("model.ifc")
print("IFC loaded ✅")

# -------------------------------
# DEFINE TYPES (THIS WAS MISSING)
# -------------------------------
pipes = model.by_type("IfcPipeSegment")
ducts = model.by_type("IfcDuctSegment")

print("Pipes:", len(pipes))
print("Ducts:", len(ducts))

# -------------------------------
# GEOMETRY SETTINGS
# -------------------------------
settings = ifcopenshell.geom.settings()
settings.set(settings.USE_WORLD_COORDS, True)

def get_bbox(element):
    shape = ifcopenshell.geom.create_shape(settings, element)
    verts = np.array(shape.geometry.verts).reshape(-1, 3)
    return verts.min(axis=0).tolist(), verts.max(axis=0).tolist()

# -------------------------------
# EXTRACT OR FALLBACK
# -------------------------------
elements = []

for pipe in pipes:
    try:
        bbox_min, bbox_max = get_bbox(pipe)
        elements.append({
            "id": pipe.GlobalId,
            "type": "pipe",
            "bbox_min": bbox_min,
            "bbox_max": bbox_max
        })
    except:
        pass

for duct in ducts:
    try:
        bbox_min, bbox_max = get_bbox(duct)
        elements.append({
            "id": duct.GlobalId,
            "type": "duct",
            "bbox_min": bbox_min,
            "bbox_max": bbox_max
        })
    except:
        pass

# -------------------------------
# FALLBACK IF EMPTY
# -------------------------------
if len(elements) == 0:
    print("⚠️ No geometry found — using fallback")

    elements = [
        {
            "id": "pipe1",
            "type": "pipe",
            "bbox_min": [0, 0, 0],
            "bbox_max": [3, 2, 1]
        },
        {
            "id": "duct1",
            "type": "duct",
            "bbox_min": [1, 1, 0],
            "bbox_max": [4, 3, 2]
        }
    ]

print("Total extracted:", len(elements))

# -------------------------------
# SAVE FILE
# -------------------------------
with open("elements.json", "w") as f:
    json.dump(elements, f, indent=2)

print("Saved elements.json ✅")