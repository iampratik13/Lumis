# ===============================
# SIMPLE REROUTING ENGINE
# ===============================

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
        for j in range(i+1, len(elements)):
            if intersects(elements[i], elements[j]):
                clashes.append((elements[i], elements[j]))
    return clashes

def move_up(pipe):
    pipe["bbox_min"][2] += 1
    pipe["bbox_max"][2] += 1

def move_side(pipe):
    pipe["bbox_min"][0] += 1
    pipe["bbox_max"][0] += 1

def resolve(elements):
    for _ in range(10):  # iterations
        clashes = detect_clashes(elements)

        if not clashes:
            break

        for a, b in clashes:
            if a["type"] == "pipe":
                move_up(a)
            elif b["type"] == "pipe":
                move_up(b)

    return elements