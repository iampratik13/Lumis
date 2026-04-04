# ==========================================
# SMART REROUTING ENGINE (USING REAL DATA)
# ==========================================

import copy
import json

# -------------------------------
# LOAD ELEMENTS FROM IFC
# -------------------------------
with open("elements.json") as f:
    elements = json.load(f)

print("Loaded elements:", len(elements))

# -------------------------------
# CONFIG
# -------------------------------
MAX_HEIGHT = 10
MIN_HEIGHT = 0
MAX_SHIFT = 5
CLEARANCE = 1

moved_elements = set()

# -------------------------------
# CLASH DETECTION
# -------------------------------
def intersects(a, b):
    return (
        a["bbox_min"][0] <= b["bbox_max"][0] and
        a["bbox_max"][0] >= b["bbox_min"][0] and
        a["bbox_min"][1] <= b["bbox_max"][1] and
        a["bbox_max"][1] >= b["bbox_min"][1] and
        a["bbox_min"][2] <= b["bbox_max"][2] and
        a["bbox_max"][2] >= b["bbox_min"][2]
    )

def detect_clashes(elements):
    clashes = []
    for i in range(len(elements)):
        for j in range(i + 1, len(elements)):
            if intersects(elements[i], elements[j]):
                clashes.append((elements[i], elements[j]))
    return clashes

# -------------------------------
# MOVEMENTS
# -------------------------------
def move_up(pipe, obstacle):
    shift = obstacle["bbox_max"][2] - pipe["bbox_min"][2] + CLEARANCE
    shift = min(shift, MAX_SHIFT)

    if pipe["bbox_max"][2] + shift > MAX_HEIGHT:
        return False

    pipe["bbox_min"][2] += shift
    pipe["bbox_max"][2] += shift
    return True

def move_down(pipe, obstacle):
    shift = pipe["bbox_max"][2] - obstacle["bbox_min"][2] + CLEARANCE
    shift = min(shift, MAX_SHIFT)

    if pipe["bbox_min"][2] - shift < MIN_HEIGHT:
        return False

    pipe["bbox_min"][2] -= shift
    pipe["bbox_max"][2] -= shift
    return True

def move_right(pipe, obstacle):
    shift = obstacle["bbox_max"][0] - pipe["bbox_min"][0] + CLEARANCE
    shift = min(shift, MAX_SHIFT)

    pipe["bbox_min"][0] += shift
    pipe["bbox_max"][0] += shift
    return True

def move_left(pipe, obstacle):
    shift = pipe["bbox_max"][0] - obstacle["bbox_min"][0] + CLEARANCE
    shift = min(shift, MAX_SHIFT)

    pipe["bbox_min"][0] -= shift
    pipe["bbox_max"][0] -= shift
    return True

# -------------------------------
# COST FUNCTION
# -------------------------------
def evaluate_move(elements, pipe, obstacle, move_func):
    temp = copy.deepcopy(elements)

    for e in temp:
        if e["id"] == pipe["id"]:
            success = move_func(e, obstacle)
            if not success:
                return float("inf"), elements
            moved = e
            break

    clash_count = len(detect_clashes(temp))
    movement = abs(moved["bbox_min"][2] - pipe["bbox_min"][2])

    cost = clash_count * 10 + movement

    return cost, temp

# -------------------------------
# PRIORITIZE
# -------------------------------
def prioritize(clashes):
    return sorted(clashes, key=lambda c: (
        0 if "pipe" in (c[0]["type"], c[1]["type"]) else 1
    ))

# -------------------------------
# RESOLVE
# -------------------------------
def resolve(elements, clash):
    a, b = clash

    if a["type"] == "pipe":
        pipe, obstacle = a, b
    elif b["type"] == "pipe":
        pipe, obstacle = b, a
    else:
        return elements

    if pipe["id"] in moved_elements:
        return elements

    strategies = [move_up, move_down, move_left, move_right]

    best_score = float("inf")
    best_elements = elements

    for s in strategies:
        score, new_elements = evaluate_move(elements, pipe, obstacle, s)
        if score < best_score:
            best_score = score
            best_elements = new_elements

    moved_elements.add(pipe["id"])
    return best_elements

# -------------------------------
# MAIN LOOP
# -------------------------------
def optimize(elements):
    prev = float("inf")

    for i in range(20):
        clashes = detect_clashes(elements)
        clashes = prioritize(clashes)

        print(f"Iteration {i}: {len(clashes)} clashes")

        if len(clashes) == 0:
            break

        if len(clashes) >= prev:
            print("No improvement")
            break

        prev = len(clashes)

        elements = resolve(elements, clashes[0])

    return elements

# -------------------------------
# RUN
# -------------------------------
print("Initial clashes:", len(detect_clashes(elements)))

elements = optimize(elements)

print("\nFinal:")
for e in elements:
    print(e["id"], e["bbox_min"], e["bbox_max"])


    # SAVE UPDATED ELEMENTS
import json

with open("elements_updated.json", "w") as f:
    json.dump(elements, f, indent=2)

print("Saved updated elements ✅")