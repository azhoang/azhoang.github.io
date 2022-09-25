#!/bin/bash

version=$(uuidgen)
file_contents=$(<dist/index.html)
echo "${file_contents//__VERSION__/$version}" >dist/index.html
echo "Version: $version"
