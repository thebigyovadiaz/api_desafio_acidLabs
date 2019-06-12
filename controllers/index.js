'use strict';

const redis = require('redis');
const config = require('../app/config');
const serviceDark = require('./serviceDarkAPI');

const clientRedis = redis.createClient(config.portRedis);

clientRedis.on('connect', () => {
  console.log('Redis connected');
});

clientRedis.on('error', (err) => {
  console.log(`Error: ${err}`);
})

const getHomeAPI = (req, res) => {
  let respuesta = {
    "error": false,
    "status": 200,
    "message": 'Welcome, API Node.js - Express to Desafio Acid Labs!'
  }

  res.status(200).send(
    respuesta
  )
}

const searchDarkAPI = (req, res) => {
  let parametros = {
    "latitude": req.body.lat,
    "longitude": req.body.lng
  }

  const searchRedisKey = `${req.body.lat}:${req.body.lng}`;
    
  return clientRedis.get(searchRedisKey, (err, data) => {
    if (data) {
      let respuesta = {
        "error": false,
        "statusCode": 200,
        "message": "Successfully",
        "data": JSON.parse(data)
      }
      
      res.status(respuesta.statusCode).send(
        respuesta
      )

    } else {
      const searchDark = serviceDark.getSearch(parametros);

      searchDark
        .then(result => {
          if (result.statusCode === 200) {
            clientRedis.set(searchRedisKey, JSON.stringify(result.data));
          }

          res.status(result.statusCode).send(
            result
          )
        })
    }
  })
}

module.exports = {
  getHomeAPI,
  searchDarkAPI
}