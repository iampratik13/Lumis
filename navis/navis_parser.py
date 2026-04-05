# ===============================
# NAVISWORKS XML PARSER
# ===============================

import xml.etree.ElementTree as ET


def parse_clashes(xml_file):
    tree = ET.parse(xml_file)
    root = tree.getroot()

    clashes = []

    for clash in root.iter("clashresult"):
        # GET CLASH POINT
        pos = clash.find(".//pos3f")

        x = float(pos.attrib["x"])
        y = float(pos.attrib["y"])
        z = float(pos.attrib["z"])

        # GET ELEMENTS
        objs = clash.findall(".//clashobject")

        elements = []

        for obj in objs:
            element_id = obj.find(".//value").text

            item_name = None

            for tag in obj.findall(".//smarttag"):
                if tag.find("name").text == "Item Name":
                    item_name = tag.find("value").text

            elements.append({
                "id": element_id,
                "name": item_name
            })

        clashes.append({
            "point": (x, y, z),
            "elements": elements
        })

    return clashes