'use strict';

const axios = require('axios');
const config = require('../app/config');

const getSearch = (params) => {
  let respuesta;
  let exclude = 'minutely,hourly,flags,daily';
  let urlDarkAPI = `https://api.darksky.net/forecast/${config.key_dark_api}/${params.latitude},${params.longitude}?exclude=${exclude}`;

  return axios.get(urlDarkAPI)
    .then(res => {
      respuesta = {
        "error": false,
        "statusCode": 200,
        "message": "Successfully",
        "data": res.data
      }

      return respuesta;
    })
    .catch(err => {
      respuesta = {
        "error": false,
        "statusCode": err.response.data.code,
        "message": err.response.data.error
      }

      return respuesta;
    })
}

module.exports = {
  getSearch
}
