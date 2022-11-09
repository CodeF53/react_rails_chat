#!/usr/bin/env bash
# exit on error
set -o errexit

# build frontend
npm install --prefix client && npm run build --prefix client
# replace old frontend with new frontend
rm -rf public
cp -a client/build/. public/

# install any new server dependencies and migrate
bundle install
bundle exec rake db:migrate