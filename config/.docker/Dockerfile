FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; then \
  npm i && npm i -D concurrently nodemon; else npm i --only=prod; fi

COPY ./client/package.json ./client/package.json

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; then \
  npm i --prefix client; else npm i --prefix client --only=prod; fi

COPY ./ .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; then \
  npm run build:docker --prefix client; fi

EXPOSE $PORT

CMD ["npm", "start"]
