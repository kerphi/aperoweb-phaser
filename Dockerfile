FROM node:4.2.2

ADD . /usr/src/app
WORKDIR /usr/src/app
RUN npm install

CMD ["node", "index.js"]
EXPOSE 3000