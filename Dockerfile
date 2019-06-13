FROM node:10.15.0-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run
EXPOSE $PORT
CMD npm run start