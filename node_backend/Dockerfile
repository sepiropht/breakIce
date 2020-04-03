FROM node:12
WORKDIR /usr/src/app/
COPY package*.json ./
COPY tslint.json ./
COPY tsconfig.json ./
RUN npm install
ADD src/ ./src
RUN npm start

EXPOSE 3001
CMD [ "node" , "dist/index.js" ]