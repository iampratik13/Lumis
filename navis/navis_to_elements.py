from navis_parser import parse_clashes

def classify(name):
    if not name:
        return "obstacle"

    if "Conduit" in name or "Cable" in name:
        return "pipe"

    return "obstacle"

def convert(xml_file):
    clashes = parse_clashes(xml_file)

    elements = []

    for c in clashes:
        x, y, z = c["point"]

        for e in c["elements"]:
            elements.append({
                "id": e["id"],
                "type": classify(e["name"]),
                "bbox_min": [x - 0.4, y - 0.4, z - 0.4],
                "bbox_max": [x + 0.4, y + 0.4, z + 0.4]
            })

    return elements