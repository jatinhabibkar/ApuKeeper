FROM node:14.16.0-alpine3.13
WORKDIR "/app"
COPY --chown=node:node package.json .
RUN npm cache clean --force
RUN npm install 
COPY --chown=node:node . .