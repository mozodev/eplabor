#!/bin/bash

# FILE=/vagrant/.env
# if [ -f "$FILE" ]; then
#     echo "[github] $FILE exists and env vars exported to bash..."
#     export $(egrep -v '^#' /vagrant/.env | xargs)
# else 
#     echo "[github] $FILE does not exist. You must add environment variables to access github repo"
# fi

# echo "[github] remote set origin url to access
# git remote set-url origin "https://$GITHUB_USER:$GITHUB_ACCESS_TOKEN@github.com/team-durumi/eplabor.git"

git status
