#!/usr/bin/env bash
REPO=$(basename $(pwd))
PORT=8658
ACCESS_POINT=http://localhost:$PORT/

IMAGE=vlandau/jaghabitat-rstudio:latest
DPATH=docker/rstudio.Dockerfile

if [[ "$(docker images -q $IMAGE 2> /dev/null)" == "" ]]; then
  echo "Image not found, building from recipe...."
  docker build -t $IMAGE - < $DPATH
fi


echo "$ACCESS_POINT (with usr and pwd $REPO)"
docker run -it --rm \
    -v "$(pwd)":/home/$REPO \
    -w "/home/$REPO" \
    -e USER=$REPO \
    -e PASSWORD=$REPO \
    -p $PORT:8787 \
    $IMAGE "$@"

if [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    # Change back ownership to user
    sudo chown -R $USER:$USER .
    sudo chown -R $USER:$USER /home/$USER/.rstudio
    sudo chown -R $USER:$USER /home/$USER/themes
fi

# remove local copies created in the repo
rm -rf .rstudio/ kitematic/ rstudio/ .local/ .config/
