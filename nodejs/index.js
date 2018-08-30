const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://example:example@sensorboxapp-shard-00-00-azkn8.mongodb.net:27017,sensorboxapp-shard-00-01-azkn8.mongodb.net:27017,sensorboxapp-shard-00-02-azkn8.mongodb.net:27017/test?ssl=true&replicaSet=SensorBoxApp-shard-0&authSource=admin')

var settings

var config = require('./config')
var mainRouter = require('./src/routes/MainRouter')

require('./src/infrastructure/SettingsParser').readFrom('./settings.json').then((contents) =>
{
  settings = contents
  if (settings[0].value === 'true') {
    console.log('Starting scheduler')
    var supervisor = require('./src/scheduler/Supervisor')
    supervisor.start()
  }
})

var settingsService = require('./src/services/SettingsService')
settingsService.initialise()

const app = express()
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', mainRouter)
app.listen(process.env.PORT || config.server.port)
console.log(`Listening on poort ${config.server.port}`)
process.on('uncaughtException', (error) => {
  console.log(error)
})
