FROM node:18-alpine

WORKDIR /app/src

RUN apk update && apk upgrade

COPY src/package*.json /app/src/

RUN npm install && npm cache clean --force

COPY src .

ENV PATH src/node_modules/.bin/:$PATH