FROM ubuntu:16.04


# Replace 1000 with your user / group id
RUN apt-get update \
	&& apt-get install -y \
        software-properties-common \
		wget \
		openjdk-9-jre \
		xvfb \
        xz-utils \
    && add-apt-repository ppa:ubuntuhandbook1/apps \
    && apt-get update \
    && apt-get install -y avrdude avrdude-doc \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/*

ENV ARDUINO_IDE_VERSION 1.8.5
RUN (wget -q -O- https://downloads.arduino.cc/arduino-${ARDUINO_IDE_VERSION}-linux64.tar.xz \
	| tar xJC /usr/local/share \
	&& ln -s /usr/local/share/arduino-${ARDUINO_IDE_VERSION} /usr/local/share/arduino \
	&& ln -s /usr/local/share/arduino-${ARDUINO_IDE_VERSION}/arduino /usr/local/bin/arduino)

RUN apt-get update && apt-get install -y git bluez
ENV DISPLAY :1.0

WORKDIR /usr/sketch
ADD arduino/rfcomm.conf /etc/bluetooth/rfcomm.conf
