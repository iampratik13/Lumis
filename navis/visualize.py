import pyvista as pv
import json
import sys

def draw(before_file, after_file):
    with open(before_file) as f:
        before = json.load(f)

    with open(after_file) as f:
        after = json.load(f)

    plotter = pv.Plotter(shape=(1, 2), window_size=[1200, 600])

    def add_box(p, e, color):
        bmin = e["bbox_min"]
        bmax = e["bbox_max"]

        center = [(bmin[i] + bmax[i]) / 2 for i in range(3)]
        size = [bmax[i] - bmin[i] for i in range(3)]

        box = pv.Cube(
            center=center,
            x_length=size[0],
            y_length=size[1],
            z_length=size[2]
        )

        p.add_mesh(box, color=color, opacity=0.6)

    # ---------------- BEFORE
    plotter.subplot(0, 0)
    for e in before:
        color = "blue" if e["type"] == "pipe" else "red"
        add_box(plotter, e, color)

    plotter.add_text("BEFORE", position="upper_edge")

    # ---------------- AFTER
    plotter.subplot(0, 1)
    for e in after:
        color = "blue" if e["type"] == "pipe" else "red"
        add_box(plotter, e, color)

    plotter.add_text("AFTER", position="upper_edge")

    plotter.link_views()  # sync camera
    plotter.show()


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python3 visualize.py before.json after.json")
    else:
        draw(sys.argv[1], sys.argv[2])