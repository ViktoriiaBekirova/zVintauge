FROM node:11.5-alpine
WORKDIR /srv
COPY . /srv
RUN yarn install && npm run build
CMD "npm" "start"
