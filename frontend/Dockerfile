FROM node:21-slim

WORKDIR /frontend

COPY . .

RUN npm i -g bun

RUN bun i

CMD ["npm", "run", "dev"]
