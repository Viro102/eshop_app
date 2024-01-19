FROM node:21

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i

COPY ./src .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
