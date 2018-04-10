#!/bin/sh
xhost +
docker-compose up arduino
docker-compose down
#after your session is done, reenable access control
xhost -
