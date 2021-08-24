#!/usr/bin/env sh

set -e

yarn run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:NikitakisTristan/vue-subscriber-page.git master:gh-pages

cd -