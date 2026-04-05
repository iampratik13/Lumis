# ===============================
# ROBUST ENGINE (FINAL VERSION)
# ===============================

def normalize(name):
    return name.lower()


def is_movable(name):
    name = normalize(name)

    movable_keywords = [
        "pipe", "duct", "cable", "tray", "conduit"
    ]

    return any(k in name for k in movable_keywords)


def priority(name):
    name = normalize(name)

    if any(k in name for k in ["pipe", "duct", "cable"]):
        return 1  # most movable
    if any(k in name for k in ["equipment", "panel"]):
        return 2
    return 3  # least movable


def generate_path(p):
    x, y, z = p

    # smarter path: up + sideways + forward
    return [
        [x, y, z],
        [x, y, z + 1],
        [x + 1, y, z + 1],
        [x + 2, y, z + 1]
    ]


def resolve_clashes(clashes):
    solutions = []
    moved_elements = set()

    for clash in clashes:

        try:
            obj1 = clash["objects"][0]
            obj2 = clash["objects"][1]

            name1 = obj1.get("name", "unknown")
            name2 = obj2.get("name", "unknown")

            id1 = obj1.get("id")
            id2 = obj2.get("id")

            # -------------------------------
            # Decide which to move (priority)
            # -------------------------------
            candidates = [
                (obj1, priority(name1)),
                (obj2, priority(name2))
            ]

            candidates.sort(key=lambda x: x[1])
            move_obj = candidates[0][0]

            move_name = move_obj.get("name", "unknown")
            move_id = move_obj.get("id")

            # -------------------------------
            # Skip if already moved
            # -------------------------------
            if move_id in moved_elements:
                solutions.append({
                    "action": "skip",
                    "reason": f"Element already moved: {move_name}",
                    "clash_point": clash["point"]
                })
                continue

            # -------------------------------
            # Check if movable
            # -------------------------------
            if not is_movable(move_name):
                solutions.append({
                    "action": "skip",
                    "reason": f"No movable element: {name1} vs {name2}",
                    "clash_point": clash["point"]
                })
                continue

            # -------------------------------
            # Generate reroute path
            # -------------------------------
            p = clash["point"]
            new_path = generate_path(p)

            # -------------------------------
            # Store result
            # -------------------------------
            solutions.append({
                "file": "model.rvt",
                "elementId": int(move_id),
                "name": move_name,
                "action": "reroute",
                "newPath": new_path
            })

            moved_elements.add(move_id)

        except Exception as e:
            # Never crash
            solutions.append({
                "action": "skip",
                "reason": f"Error processing clash: {str(e)}"
            })

    return solutions