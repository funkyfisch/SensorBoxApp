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

### Bluetooth support inside Docker 

Temporarily, a solution is given by creating an rfcomm device on the host machine before starting a service.
For more details on how this works, check [this](http://embeddedprogrammer.blogspot.se/2012/06/ubuntu-hacking-hc-06-bluetooth-module.html)

If you want to use a bluetooth device ( like a HC05 module ) with the arduino service for debugging or your instance relies on a wireless arduino node set using bluetooth, you should pair with your bluetooth device first, and use its MAC address as a parameter for the startup scripts, like so :
```
./start-deploy.sh 12-34-56-78-90
```


## Acknowledgments

* [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2/) by PurpleBooth
* [Dockerized Arduino IDE](https://github.com/tombenke/darduino) by tombenke
