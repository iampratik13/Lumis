import heapq

X_MIN, X_MAX = 0, 12
Y_MIN, Y_MAX = 0, 10

def neighbors(node):
    x, y = node
    return [(x+1,y),(x-1,y),(x,y+1),(x,y-1)]

def heuristic(a, b):
    return abs(a[0]-b[0]) + abs(a[1]-b[1])

def build_obstacles(elements):
    blocked = set()

    for e in elements:
        if e["type"] in ["duct", "wall", "obstacle"]:
            xmin, ymin = e["bbox_min"]
            xmax, ymax = e["bbox_max"]

            for x in range(xmin, xmax+1):
                for y in range(ymin, ymax+1):
                    blocked.add((x,y))

    return blocked

def astar(start, goal, blocked):
    open_set = []
    heapq.heappush(open_set, (0, start))

    came_from = {}
    g_score = {start: 0}

    while open_set:
        _, current = heapq.heappop(open_set)

        if current == goal:
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start)
            return path[::-1]

        for n in neighbors(current):
            if n[0] < X_MIN or n[0] > X_MAX or n[1] < Y_MIN or n[1] > Y_MAX:
                continue

            if n in blocked:
                continue

            new_cost = g_score[current] + 1

            if n not in g_score or new_cost < g_score[n]:
                g_score[n] = new_cost
                f = new_cost + heuristic(n, goal)
                heapq.heappush(open_set, (f, n))
                came_from[n] = current

    return None

def reroute(elements):
    pipe = [e for e in elements if e["type"] == "pipe"][0]
    start = pipe["start"]
    goal = pipe["end"]

    blocked = build_obstacles(elements)

    path = astar(start, goal, blocked)

    return path