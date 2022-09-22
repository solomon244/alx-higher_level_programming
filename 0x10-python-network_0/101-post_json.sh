#!/bin/bash
# script that sends a JSON POST request to a URL passed as the first argument
curl -s -X POST "$1" -H "Content-Type: application/json" -d @"$2"
