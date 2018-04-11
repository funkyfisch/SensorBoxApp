FROM node:9

WORKDIR /usr/share/app

RUN apt-get update && apt-get install nano

#install the handy node monitor tool to keep the server alive on development
RUN npm install -g nodemon mocha
ADD arduino/rfcomm.conf /etc/bluetooth/rfcomm.conf
CMD ["npm", "start"]
