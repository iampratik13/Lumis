import pyvista as pv
import json

# -------------------------------
# LOAD BEFORE & AFTER
# -------------------------------
with open("elements.json") as f:
    before = json.load(f)

with open("elements_updated.json") as f:
    after = json.load(f)

# -------------------------------
# CREATE SIDE-BY-SIDE VIEW
# -------------------------------
plotter = pv.Plotter(shape=(1, 2))

def add_box(plotter, bmin, bmax, color):
    center = [(bmin[i] + bmax[i]) / 2 for i in range(3)]
    size = [bmax[i] - bmin[i] for i in range(3)]
    box = pv.Cube(center=center,
                  x_length=size[0],
                  y_length=size[1],
                  z_length=size[2])
    plotter.add_mesh(box, color=color, opacity=0.6)

# -------------------------------
# LEFT: BEFORE
# -------------------------------
plotter.subplot(0, 0)
for e in before:
    add_box(plotter, e["bbox_min"], e["bbox_max"], "red")
plotter.add_text("BEFORE (Clashes)", font_size=12)

# -------------------------------
# RIGHT: AFTER
# -------------------------------
plotter.subplot(0, 1)
for e in after:
    add_box(plotter, e["bbox_min"], e["bbox_max"], "green")
plotter.add_text("AFTER (Resolved)", font_size=12)

plotter.show()