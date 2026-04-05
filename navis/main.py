from navis_to_elements import convert
from engine import detect_clashes, resolve
import json

# LOAD REAL DATA
elements = convert("clashes.xml")

print("Initial clashes:", len(detect_clashes(elements)))

# SAVE BEFORE
with open("before.json", "w") as f:
    json.dump(elements, f, indent=2)

# RUN ENGINE
elements = resolve(elements)

print("Final clashes:", len(detect_clashes(elements)))

# SAVE AFTER
with open("after.json", "w") as f:
    json.dump(elements, f, indent=2)