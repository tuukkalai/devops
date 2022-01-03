#!/bin/bash

git clone git@github.com:tuukkalai/simple_api.git
cd simple_api

docker build . -t dockerinsidedocker
docker tag dockerinsidedocker tuukkala/dockerinsidedocker
docker login -u {username} -p {password}
docker push tuukkala/dockerinsidedocker:latest