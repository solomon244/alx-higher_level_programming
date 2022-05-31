#!/usr/bin/python3
c = 0
for n in range(122, 96, -1):
    if n % 2 == 0:
         c = n
    else:
         c = n - 32
    print("{}".format(chr(c)), end='')
