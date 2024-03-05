FROM node:18-alpine

COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve

CMD [ "serve", "-s", "build"]