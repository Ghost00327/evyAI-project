#!/bin/bash

current_branch=$(git rev-parse --abbrev-ref HEAD)
git checkout --orphan compiled
git reset --hard
git add -f extension/chrome
git commit -m 'compiled code'
git push -f https://github.com/evyAI/compiled_extension.git compiled 
git checkout "$current_branch"
git branch -D compiled

echo "Pushed compiled code to remote repo"