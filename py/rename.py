#!/usr/bin/env python3
import os
import sys

# given arg 1 is a filename rename to arg 2
def main():    
    if len(sys.argv) < 3:
        print("Usage: rename.py <old> <new>")
        sys.exit(1)
    old = sys.argv[1]
    new = sys.argv[2]
    if os.path.exists(new):
        print("{} exists".format(new))
        sys.exit(1)
    os.rename(old, new)
