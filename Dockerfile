FROM node:17.0.1-alpine as build-stage

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node package*.json ./

ENV NODE_ENV=development

RUN npm install

COPY --chown=node . .

RUN npm run build

FROM node:17.0.1-alpine as production-stage

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node package*.json ./

ENV NODE_ENV=production PORT=5000

RUN npm install --only=production

COPY --from=build-stage --chown=node /home/node/app/dist ./dist
COPY --from=build-stage --chown=node /home/node/app/public ./public

EXPOSE ${PORT}

CMD [ "npm", "start" ]
