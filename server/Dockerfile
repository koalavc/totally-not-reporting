FROM node:8

RUN mkdir /home/node/server

WORKDIR /home/node/server

ENV PATH /home/node/server/node_modules/.bin$PATH

COPY package.json /home/node/server

RUN npm install -g nodemon

RUN npm install

CMD ["npm", "run", "watch"];