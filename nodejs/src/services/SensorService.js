const Sensor = require('../model/Sensors')
const Value = require('../model/Values')

const SensorService = new Object

SensorService.getAll = async function() {
  var timestamp_minute =
    Math.floor(new Date(new Date().getFullYear(), new Date().getMonth(),
                        new Date().getDate(), new Date().getHours(),
                        new Date().getMinutes(), new Date().getSeconds()-10)
                      .getTime()/1000)
  console.log(timestamp_minute)
  try {
    let sensors = await Value
    .find({})
    .where('timestamp_minute').gt(timestamp_minute)
    .exec()
    return sensors
  } catch (error) {
    throw error
  }
}

SensorService.getValuesOfOneSensor = async function(name, type, model) {
  try {
    let value = await Value
    .find({ sensorname: name, sensortype: type, sensorhardware_model: model })
    return value
  } catch (error) {
    throw error
  }
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
  try {
    await value.save()
    return 'Sensor value stored'
  } catch (error) {
    throw error
  }
}

SensorService.dropSensorCollection = async function() {
  try {
    await Value.remove({})
    return 'Sensors collection dropped'
  } catch (error) {
    throw error
  }
}

SensorService.create = async function(name, type, model) {
  var sensor = new Sensor({
    name: name,
    type: type,
    hardware_model : model,
    created_at: new Date()
  })
  try {
    await sensor.save()
    return 'Successfully created sensor'
  } catch (error) {
    throw error
  }
}

module.exports = SensorService
