FROM node:10.15.0-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run
EXPOSE $PORT
RUN adduser -D myuser
USER myuser
CMD npm run start