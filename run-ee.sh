#!/usr/bin/env bash
IMAGE=vlandau/thesis-ee:latest
DPATH=docker/ee-python.Dockerfile

if [[ "$(docker images -q $IMAGE 2> /dev/null)" == "" ]]; then
  echo "Image not found, building from recipe...."
  docker build -t $IMAGE - < $DPATH
fi

docker run -it --rm \
	-v "$(pwd)":/home \
	-w /home \
	-v ~/google-cloud-sdk/csp-projects:/root/.config/gcloud \
	-v ~/earthengine/:/root/.config/earthengine/ \
	$IMAGE "$@"

if [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    # Change back ownership to user
    sudo chown -R $USER:$USER .
fi
