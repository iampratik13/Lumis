from data import get_elements
from pathfinder import reroute
from visualize import draw_scene

elements = get_elements()

path = reroute(elements)

print("Computed Path:", path)

draw_scene(elements, path)