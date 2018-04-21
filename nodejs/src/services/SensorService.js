var Sensor = require('../model/Sensors')
var Value = require('../model/Values')

var SensorService = new Object

SensorService.getAll = function() {
  return new Promise((resolve, reject) => {
    var timestamp_minute = Math.floor(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()-10).getTime()/1000)
    console.log(timestamp_minute)
    Value
      .find({})
      .where('timestamp_minute').gt(timestamp_minute)
      .exec(function(err, sensors) {
        if (!err) {
          resolve(sensors)
        } else {
          console.log(err)
          reject('Problem reading from DB')
        }
      })
  })
}

SensorService.getValuesOfOneSensor = function(name, type, model) {
  return new Promise((resolve, reject) => {
    Value.find({ sensorname: name, sensortype: type, sensorhardware_model: model }, (error, value) => {
      if (error) {
        reject(error)
      }
      else {
        resolve(value)
      }
    })
  })
}

SensorService.saveSensorReading = function(name, type, model, reading) {
  return new Promise((resolve, reject) => {
    var time = Math.floor(new Date().getTime()/1000)
    var value = new Value({
      sensorname: name,
      sensortype: type,
      sensorhardware_model: model,
      value: reading,
      timestamp_minute: time
    })
    value.save((error) => {
      if (error) reject(error)
      resolve()
    })
  })
}

SensorService.create = function(name, type, model) {
  return new Promise((resolve, reject) => {
    var sensor = new Sensor({
      name: name,
      type: type,
      hardware_model : model,
      created_at: new Date()
    })
    sensor.save((error) => {
      if (error) {
        reject(error)
      }
      else {
        resolve('Successfully created sensor')
      }
    })
  })
}

module.exports = SensorService
