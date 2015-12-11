FROM node:4.2.2

ADD . /usr/src/app
WORKDIR /usr/src/app
RUN npm install

CMD ["node", "/usr/src/app/index.js"]
EXPOSE 3000