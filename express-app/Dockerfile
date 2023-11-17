FROM node:21

WORKDIR /express-app

COPY package*.json .
RUN npm i
COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
