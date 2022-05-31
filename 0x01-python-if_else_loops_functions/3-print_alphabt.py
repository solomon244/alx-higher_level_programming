#!/usr/bin/python3
for cha in range(97, 123):
    if (f"{cha:c}") != "q" and (f"{cha:c}") != "e":
        print("{:c}".format(cha), end="")
