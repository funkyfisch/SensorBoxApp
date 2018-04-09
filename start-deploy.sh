#!/bin/sh

docker-compose run vuejs-build
docker-compose up nodejs server
docker-compose down
