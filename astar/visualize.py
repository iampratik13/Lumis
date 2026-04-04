import pyvista as pv

def draw_scene(elements, path=None):
    plotter = pv.Plotter()

    for e in elements:
        if "bbox_min" not in e:
            continue

        xmin, ymin = e["bbox_min"]
        xmax, ymax = e["bbox_max"]

        if e["type"] == "wall":
            color = "gray"
        elif e["type"] == "duct":
            color = "red"
        elif e["type"] == "obstacle":
            color = "orange"
        else:
            continue

        center = [(xmin+xmax)/2, (ymin+ymax)/2, 0]

        box = pv.Cube(
            center=center,
            x_length=(xmax-xmin),
            y_length=(ymax-ymin),
            z_length=2
        )

        plotter.add_mesh(box, color=color, opacity=0.5)

    # BEFORE (CLASH)
    pipe = [e for e in elements if e["type"] == "pipe"][0]
    start = pipe["start"]
    end = pipe["end"]

    before = pv.lines_from_points([(start[0],start[1],0),(end[0],end[1],0)])
    plotter.add_mesh(before, color="red", line_width=8)

    # AFTER (A*)
    if path:
        pts = [(x,y,0) for x,y in path]
        after = pv.lines_from_points(pts)
        plotter.add_mesh(after, color="blue", line_width=6)

    plotter.add_title("Red = Clash | Blue = Fixed")
    plotter.show()