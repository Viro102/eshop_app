FROM node:21-slim

WORKDIR /app

COPY package*.json /app

COPY ./src /app/src

RUN npm i -g bun

RUN bun i

CMD [ "npm", "run", "start" ]
