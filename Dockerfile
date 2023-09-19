FROM node:17-alpine

WORKDIR /feu-frontend

COPY package.json .

RUN npm install

COPY . .

CMD npm run dev