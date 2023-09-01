#!/usr/bin/env sh
set -e
npm run build
cd out
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:bastilavarias/bastilavarias.github.io.git master:gh-pages
cd -