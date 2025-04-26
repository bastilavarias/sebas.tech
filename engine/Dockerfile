FROM node:22.13.1-alpine

WORKDIR /usr/src/app

RUN npm install -g knex

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5002

CMD ["npm", "run", "dev"]