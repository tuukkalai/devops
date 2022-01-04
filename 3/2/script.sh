#!/bin/sh

rm -rf simple_api/

git clone https://github.com/tuukkalai/simple_api.git
cd simple_api

echo 'Building docker inside docker'
docker build . -t dind
docker tag dind tuukkala/dockerinsidedocker

echo 'Logging in to Docker Hub'
docker login

echo 'Pushing updates to Docker Hub'
docker push tuukkala/dockerinsidedocker:latest
