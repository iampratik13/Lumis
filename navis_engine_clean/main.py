# ===============================
# MAIN PIPELINE
# ===============================

from navis_parser import parse_clashes
from engine import resolve_clashes
import json


# LOAD CLASHES
clashes = parse_clashes("clashes.xml")

print("Total clashes found:", len(clashes))

# RESOLVE
solutions = resolve_clashes(clashes)

print("Solutions generated:", len(solutions))

# SAVE OUTPUT
with open("reroute.json", "w") as f:
    json.dump(solutions, f, indent=2)

print("Saved reroute.json ✅")


import json
print(json.dumps(solutions, indent=2))

# SAVE OUTPUT
with open("reroute.json", "w") as f:
    json.dump(solutions, f, indent=2)