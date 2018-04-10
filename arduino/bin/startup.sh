#!bin/sh

#this will force the arduino IDE into showing the rfcomm0 port

cat /dev/rfcomm0 &
arduino
