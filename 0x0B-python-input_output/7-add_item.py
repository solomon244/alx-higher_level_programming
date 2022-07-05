#!/usr/bin/python3
""" module for add each argument to a file in JSON format """


from sys import argv
load_from_json_file = __import__('6-load_from_json_file').load_from_json_file
save_to_json_file = __import__('5-save_to_json_file').save_to_json_file

file_name = 'add_item.json'

try:
    current_json = load_from_json_file(file_name)
except(FileNotFoundError):
    current_json = []
current_json.extend(argv[1:])
save_to_json_file(current_json, file_name)
