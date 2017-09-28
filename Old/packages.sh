#!/bin/bash
dpkg-deb -bZgzip projects/ReOS debs
# dpkg-deb -bZgzip projects/<project name> <output folder>