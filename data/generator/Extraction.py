import argparse
import json
import requests
import logging
import regex
import subprocess
import os
from pathlib import Path

logging.basicConfig(
    level=logging.INFO,
    format="[%(levelname)8s][%(filename)s:%(lineno)s - %(funcName)s()] %(message)s",
)
idlescape_site = "https://www.idlescape.com"
output_dir = Path(__file__).resolve().parent.parent.joinpath("raw")


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--url")
    return parser.parse_args()


def fetch_data(url):
    main_script = url
    if not main_script:
        logging.info("Automatically detecting main.<hex>.chunk.js")
        main_script_re = r"main\.[a-zA-Z0-9]+\.chunk\.js"
        idlescape_site_text = requests.get(idlescape_site).text
        main_script_search = regex.search(main_script_re, idlescape_site_text)
        if main_script_search is not None:
            main_script = f"{idlescape_site}/static/js/{main_script_search.group(0)}"
            logging.info(f"Detected {main_script}")
        else:
            logging.error("Main script not detected")
            return None

    return requests.get(main_script).text


def build_js(name, data):
    js_file = output_dir.joinpath(f"{name}.js")
    json_file = output_dir.joinpath(f"{name}.json")
    try:
        object_re = r"Object\(([a-zA-Z.]+)\)"
        obj = regex.search(object_re, data)
        with open(js_file, "w", newline="\n") as file:
            file.write('fs = require("fs")\n')
            if obj is not None and len(obj) > 1:
                objs = obj[1].split(".")
                file.write(f"let {objs[0]} = {{}}\n")
                file.write(f"{objs[0]}.{objs[1]} = function(self, key, val) {{ self[key] = val; }}\n")

            file.write(f"{data}\n")
            if (name == "enchantments"):
                file.write("for (const [id, enchant] of Object.entries(enchantments)) enchant['tooltip'] = enchant.getTooltip();\n")
            file.write(f'fs.writeFileSync("{json_file.as_posix()}", JSON.stringify({name}, null, 2), "utf-8")\n')
        logging.info(f"wrote {js_file}")
    except Exception as e:
        logging.error(f"unable to compile locations: {e}")

    try:
        subprocess.call(["node", js_file])
        logging.info(f"converted {name}.js to JSON")
        os.remove(js_file)
    except Exception as e:
        logging.error(f"unable to convert locations: {e}")

    return json_file


def extract_locations(data):
    location_re = r'\(([a-zA-Z0-9_$]+)\=(\{10\:\{name\:"Clay Pit").+(,\1\))'
    locations = regex.search(location_re, data)
    data_string = f"let locations={locations.group(0)}\n"
    return data_string


def extract_abilities(data):
    item_look_between_re = r'([a-zA-Z0-9_$]+)(?=\=\{1:\{id:1,abilityName:"Auto Attack").+?([a-zA-Z0-9_$]+)(?=\=function\([a-zA-Z0-9_$]+\))'
    item_look_between = regex.search(item_look_between_re, data)

    if len(item_look_between.groups()) != 2:
        logging.error('Did not find suitable look between search terms, skipping item extraction')
        return False

    itemExpression = fr'({item_look_between.group(1)}\=)[\s\S]*?({item_look_between.group(2)}\=)'
    x = regex.search(itemExpression, data).group(0)
    try:
        fullDictlike = r'(\{)[\s\S]*(\})'
        fullAbilityDictlike = regex.search(fullDictlike, x).group(0)[1:-1]
    except AttributeError:
        logging.error('Did not find the proper set of items')
        return False

    fullAbilityDictlike = '{'+fullAbilityDictlike+'}'
    data_string = f"let abilities = {fullAbilityDictlike}\n"
    return data_string


def extract_enchantments(data):
    enchant_re = r"(enchantments)[\s\S]*?(?=,e.exports)"
    enchantments = regex.search(enchant_re, data)
    data_string = f"let {enchantments.group(0)}\n"
    return data_string


def extract_items(data):
    item_look_between_re = r'([a-zA-Z0-9_$]+)(?=\=\{1:\{id:1,name:"Gold").+?([a-zA-Z0-9_$]+)(?=\=function\([a-zA-Z0-9_$]+\))'
    item_look_between = regex.search(item_look_between_re, data)

    if len(item_look_between.groups()) == 2:
        logging.info(f"suitable look around terms found (between '{item_look_between.group(1)}' and '{item_look_between.group(2)}')")
        item_re = fr"(?<={item_look_between.group(1)}\=)([\s\S]*?)(?=,{item_look_between.group(2)}\=)"
    else:
        logging.error("could not find suitable terms to search between for item definitions, skipping item extraction...")
        return

    items = regex.search(item_re, data)
    data_string = f"let items = {items.group(0)}\n"
    return data_string


def main():
    args = parse_args()

    if not output_dir.exists():
        logging.info(f"creating output directory: {output_dir}")
        Path.mkdir(output_dir)

    data = fetch_data(args.url)
    if data is None:
        return

    logging.info("extracting locations")
    locations = extract_locations(data)
    if locations:
        build_js("locations", locations)

    logging.info("extracting abilities")
    abilities = extract_abilities(data)
    if abilities:
        build_js("abilities", abilities)

    logging.info("extracting enchantments")
    enchantments = extract_enchantments(data)
    if enchantments:
        build_js("enchantments", enchantments)

    logging.info("extracting items")
    items = extract_items(data)
    if items:
        build_js("items", items)
    createGameResourcesArrayClass()

def createGameResourcesArrayClass():
    try:
        generatorFile = Path(__file__).resolve().parent.joinpath('GameResourcesArrayGenerator.js')
        subprocess.call(["node", generatorFile])
        logging.info(f"Generated IdlescapeGameData.js")
    except Exception as e:
        logging.error(f"unable to generate IdlescapeGameData.js: {e}")

if __name__ == "__main__":
    main()