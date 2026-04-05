# ===============================
# BALANCED ENGINE (CORRECT)
# ===============================

import math


def center(e):
    return [
        (e["bbox_min"][0] + e["bbox_max"][0]) / 2,
        (e["bbox_min"][1] + e["bbox_max"][1]) / 2,
        (e["bbox_min"][2] + e["bbox_max"][2]) / 2,
    ]


def distance(a, b):
    return math.dist(center(a), center(b))


# -------------------------------
# INTERSECTION (LOWER CLEARANCE)
# -------------------------------
def intersects(a, b, clearance=0.15):

    return (
        a["bbox_min"][0] <= b["bbox_max"][0] - clearance and
        a["bbox_max"][0] >= b["bbox_min"][0] + clearance and
        a["bbox_min"][1] <= b["bbox_max"][1] - clearance and
        a["bbox_max"][1] >= b["bbox_min"][1] + clearance and
        a["bbox_min"][2] <= b["bbox_max"][2] - clearance and
        a["bbox_max"][2] >= b["bbox_min"][2] + clearance
    )


# -------------------------------
# CLASH DETECTION (LESS STRICT)
# -------------------------------
def detect_clashes(elements):
    clashes = []

    for i in range(len(elements)):
        for j in range(i + 1, len(elements)):

            a = elements[i]
            b = elements[j]

            # only ignore identical types
            if a["type"] == b["type"]:
                continue

            # RELAX DISTANCE FILTER
            if distance(a, b) > 5:
                continue

            if intersects(a, b):
                clashes.append((a, b))

    return clashes


# -------------------------------
# MOVE
# -------------------------------
def move(pipe, dx=0, dy=0, dz=0):
    pipe["bbox_min"][0] += dx
    pipe["bbox_max"][0] += dx
    pipe["bbox_min"][1] += dy
    pipe["bbox_max"][1] += dy
    pipe["bbox_min"][2] += dz
    pipe["bbox_max"][2] += dz


# -------------------------------
# RESOLVE
# -------------------------------
def resolve(elements):
    for iteration in range(5):

        clashes = detect_clashes(elements)
        print(f"Iteration {iteration}: {len(clashes)} clashes")

        if not clashes:
            break

        for a, b in clashes:

            pipe = a if a["type"] == "pipe" else b

            move(pipe, dz=0.8)

    return elements