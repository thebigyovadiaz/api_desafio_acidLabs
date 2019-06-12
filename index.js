'use strict'

const config = require('./app/config.js')
const app = require('./app/app.js')

app.listen(config.port, () => {
  console.log(`API running in http://localhost:${config.port}/api`)
})
