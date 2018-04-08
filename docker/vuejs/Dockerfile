FROM node:9

WORKDIR /usr/share/app

#devmode - for quick and dirty text editing
RUN apt-get update && apt-get install nano

RUN npm install -g vue-cli mocha

CMD ["npm", "run", "dev"]
