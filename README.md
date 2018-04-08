# SensorBox

Another attempt for a customisable home automation system.
More info coming soon

## Installation

### Development ( x86 - x64 )

* Clone the repository on your machine
* Install Docker and Docker compose

At the root of the folder, run
```
./start-dev.sh
```


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


## Acknowledgments

* [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2/) by PurpleBooth
* [Dockerized Arduino IDE](https://github.com/tombenke/darduino) by tombenke
