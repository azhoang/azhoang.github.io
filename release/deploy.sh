#!/bin/bash

version=$(uuidgen)
yarn build
cp -Rf build/* azhoang/
file_contents=$(<azhoang/index.html)
echo "${file_contents//__VERSION__/$version}" >azhoang/index.html
echo "Version: $version"
cd azhoang
git add .
git commit -m "Release version: $version"
git push
