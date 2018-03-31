FROM node:9

WORKDIR /usr/share/app

#ENV http_proxy=http://172.17.0.1:3128
#ENV https_proxy=http://172.17.0.1:3128

#RUN npm config set strict-ssl=false \
#    npm config set registry=http://registry.npmjs.org/ \
#    npm config set proxy=http://172.17.0.1:3128/ && \
#    npm config set https-proxy=http://172.17.0.1:3128

#devmode - for quick and dirty text editing
RUN apt-get update && apt-get install nano

RUN npm install -g vue-cli mocha

CMD ["npm", "run", "dev"]
