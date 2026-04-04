def get_elements():
    return [
        # WALLS (ROOM BOUNDARY)
        {"type": "wall", "bbox_min": (0, 0), "bbox_max": (12, 1)},
        {"type": "wall", "bbox_min": (0, 0), "bbox_max": (1, 10)},
        {"type": "wall", "bbox_min": (0, 9), "bbox_max": (12, 10)},
        {"type": "wall", "bbox_min": (11, 0), "bbox_max": (12, 10)},

        # OBSTACLES (leave space around)
        {"type": "obstacle", "bbox_min": (4, 2), "bbox_max": (6, 3)},
        {"type": "obstacle", "bbox_min": (7, 7), "bbox_max": (9, 8)},

        # DUCT (IMPORTANT: leave vertical gap)
        {"type": "duct", "bbox_min": (5, 4), "bbox_max": (6, 6)},

        # PIPE
        {
            "type": "pipe",
            "start": (2, 5),
            "end": (10, 5)
        }
    ]