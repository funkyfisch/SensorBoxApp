FROM node:9

WORKDIR /usr/share/app

#We need to find a way to make this a choice at deployment
#ENV http_proxy=http://172.17.0.1:3128
#ENV https_proxy=http://172.17.0.1:3128

#RUN npm config set strict-ssl=false \
#    npm config set registry=http://registry.npmjs.org/ \
#    npm config set proxy=http://172.17.0.1:3128/ && \
#    npm config set https-proxy=http://172.17.0.1:3128/

RUN apt-get update && apt-get install nano

#install the handy node monitor tool to keep the server alive on development
RUN npm install -g nodemon mocha

CMD ["npm", "start"]
