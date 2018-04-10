#!/bin/sh

BLUETOOTH_DEV=$1
#bluetooth connection is temporarily done from this script and the rfcomm device is passed to docker
#later connection should be managed by the container itself
if [ -z "$BLUETOOTH_DEV" ]; then
   echo "Starting service(s) without bluetooth device"
   #this is needed for the container to access the display
   xhost +
   docker-compose up vuejs nodejs
   docker-compose down
   #after your session is done, reenable access control
   xhost -
else
   echo "Starting service(s) with $BLUETOOTH_DEV attached to hci0"
   sudo rfcomm bind hci0 $BLUETOOTH_DEV
   #this is needed for the container to access the display
   xhost +
   docker-compose up vuejs nodejs
   docker-compose down
   #after your session is done, reenable access control
   xhost -
   sudo rfcomm release hci0 $BLUETOOTH_DEV
fi
