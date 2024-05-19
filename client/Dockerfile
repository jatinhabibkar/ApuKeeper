FROM node:16.9.1-alpine as build
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

COPY --chown=node:node package.json .
RUN npm cache clean --force
RUN npm install 
COPY --chown=node:node . .