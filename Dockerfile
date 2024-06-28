FROM node:20

WORKDIR /build

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]