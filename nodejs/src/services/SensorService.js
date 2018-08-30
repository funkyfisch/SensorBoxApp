var Sensor = require('../model/Sensors')
var Value = require('../model/Values')

var SensorService = new Object

SensorService.getAll = async function() {
  var timestamp_minute =
    Math.floor(new Date(new Date().getFullYear(),
                        new Date().getMonth(),
                        new Date().getDate(),
                        new Date().getHours(),
                        new Date().getMinutes(),
                        new Date().getSeconds()-10)
                      .getTime()/1000)
  console.log(timestamp_minute)
  let sensors = await Value
                      .find({})
                      .where('timestamp_minute').gt(timestamp_minute)
                      .exec()
                      .catch(error => throw error)
  return sensors
}

SensorService.getValuesOfOneSensor = async function(name, type, model) {
  let value = await Value
                    .find({ sensorname: name, sensortype: type, sensorhardware_model: model })
                    .catch(error => throw error)
  return value
}

SensorService.saveSensorReading = async function(name, type, model, reading) {
  var time = Math.floor(new Date().getTime()/1000)
  var value = new Value({
    sensorname: name,
    sensortype: type,
    sensorhardware_model: model,
    value: reading,
    timestamp_minute: time
  })
  await value.save().catch(error => throw error)
}

SensorService.dropSensorCollection = async function() {
    await Value.remove({}).catch(error => throw error)
    return 'Sensors collection dropped'
}

SensorService.create = async function(name, type, model) {
  var sensor = new Sensor({
    name: name,
    type: type,
    hardware_model : model,
    created_at: new Date()
  })
  await sensor.save().catch(error => throw error)
  return 'Successfully created sensor'
}

module.exports = SensorService
