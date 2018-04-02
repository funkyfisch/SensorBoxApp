FROM resin/rpi-raspbian:jessie

# add our user and group first to make sure their IDs get assigned consistently, regardless of whatever dependencies get added
RUN groupadd -r mongodb && useradd -r -g mongodb mongodb

RUN apt-get update
RUN apt-get upgrade
RUN apt-get install mongodb-server
RUN service mongod start

EXPOSE 27017
CMD ["mongod"]
