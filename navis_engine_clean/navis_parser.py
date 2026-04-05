# ===============================
# NAVIS XML PARSER
# ===============================

import xml.etree.ElementTree as ET


def parse_clashes(xml_file):
    tree = ET.parse(xml_file)
    root = tree.getroot()

    clashes = []

    for clash in root.findall(".//clashresult"):

        # get clash point
        pos = clash.find(".//pos3f")
        x = float(pos.attrib["x"])
        y = float(pos.attrib["y"])
        z = float(pos.attrib["z"])

        objects = []

        for obj in clash.findall(".//clashobject"):
            obj_id = obj.find(".//value").text

            name_tag = obj.find(".//smarttag/value")
            name = name_tag.text if name_tag is not None else "Unknown"

            objects.append({
                "id": obj_id,
                "name": name
            })

        clashes.append({
            "point": (x, y, z),
            "objects": objects
        })

    return clashes