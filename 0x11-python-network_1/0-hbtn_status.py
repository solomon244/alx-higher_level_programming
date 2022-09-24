#!/usr/bin/python3
"""a Python script that fetches https://alx-intranet.hbtn.io/status"""

from urllib import request

if __name__ == "__main__":
    with request.urlopen("https://alx-intranet.hbtn.io/status") as response:
       index = response.read()
       print("Body response:")
       print("\t- type: {}".format(type(index)))
       print("\t- content: {}".format(index))
       print("\t- utf8 content: {}".format(index.decode('utf-8')))
