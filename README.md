# SensorBox

Another attempt for a customisable home automation system.
More info coming soon

## Installation

### Development ( x86 - x64 )

* Clone the repository on your machine
* Install Docker and Docker compose

To run the Arduino IDE :
```
./start-dev-arduino.sh
```

To run the webapp development environment :
```
./start-dev-webapp.sh
```
The webapp development environment lints, tests and builds a code at the beginning of every session.

### Deployment ( e.g. Raspberry Pi )

Assuming a clean install of Raspbian :

```
curl -sSL https://get.docker.com | sh
```

If you want to run docker and docker-compose without sudo :

```
sudo groupadd docker
sudo usermod -aG docker $USER
```

Install docker-compose for raspberry pi:

```
sudo pip install docker-compose
```

Run the deployment script:

```
./start-deploy.sh
```

### Bluetooth support inside Docker (experimental)

~~Temporarily, a solution is given by creating an rfcomm device on the host machine before starting a service.
For more details on how this works, check [this](http://embeddedprogrammer.blogspot.se/2012/06/ubuntu-hacking-hc-06-bluetooth-module.html)~~

All that is needed is to pair your bluetooth device with your host machine once. The connection is made after the initiation of any docker service utilises the device. This is done by forcing a binding on the images, which creates a preconfigured rfcomm device listed in /dev/, to which the container, when executing, is binding the paired device if it is around. This approach however is in need of testing, and is highly experimental.

## Acknowledgments

* [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2/) by PurpleBooth
* [Dockerized Arduino IDE](https://github.com/tombenke/darduino) by tombenke
