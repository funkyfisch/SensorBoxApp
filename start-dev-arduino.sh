#!/bin/sh

#this is needed for the container to access the display
xhost +
docker-compose up arduino
docker-compose down
#after your session is done, reenable access control
xhost -
