#!bin/sh

#this will force the arduino IDE into showing the rfcomm0 port

mkdir libraries && mkdir sensornode
cd libraries && git clone https://github.com/adafruit/DHT-sensor-library && git clone https://github.com/adafruit/Adafruit_Sensor

cat /dev/rfcomm0 &
arduino
