from ifc_parser import extract_elements
from engine import detect_clashes, resolve
from ifc_exporter import update_ifc
import json

# -------------------------------
# LOAD IFC
# -------------------------------
elements = extract_elements("model.ifc")

print("Loaded elements:", len(elements))

# -------------------------------
# INITIAL CLASHES
# -------------------------------
initial = detect_clashes(elements)
print("Initial clashes:", len(initial))

# SAVE BEFORE
with open("before.json", "w") as f:
    json.dump(elements, f, indent=2)

# -------------------------------
# RESOLVE
# -------------------------------
elements = resolve(elements)

# -------------------------------
# FINAL CLASHES
# -------------------------------
final = detect_clashes(elements)
print("Final clashes:", len(final))

# SAVE AFTER
with open("after.json", "w") as f:
    json.dump(elements, f, indent=2)

print("Done ✅")

# -------------------------------
# EXPORT UPDATED IFC
# -------------------------------
update_ifc("model.ifc", "model_updated.ifc", elements)