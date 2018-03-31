var Sensor = require('../model/Sensors')
var Value = require('../model/Values')

var SensorService = new Object

SensorService.getAll = function() {
  return new Promise((resolve, reject) => {
    Sensor.find({}, function(err, sensors) {
      if (!err && sensors.length > 0) {
        resolve(sensors)
      }
      reject()
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
    var now = new Date()
    var hour = now.getHours()
    var minute = now.getMinutes()
    var second = now.getSeconds()
    var hourISO = new Date(now.getYear(), now.getMonth(), now.getDay(), hour)
    Value.find({ sensorname: name, timestamp_hour: hourISO }, (error, value) => {
      if (value[0]) {
        value[0].values[minute][second] = reading + ''
        Value.update({ timestamp_hour: hourISO }, { $set: { values: value[0].values } }, (error) => {
          if (error) reject(error)
          resolve()
        })
      }
      else {
        console.log(`Creating new hour timestamp for sensor ${name}${type}${model} at ${hour}`)
        var thing = {}
        for (var i = 0; i < 60; i++) {
          thing[i] = {}
          for (var j = 0; j < 60; j++) {
            thing[i][j] = 0.0 + ''
          }
        }
        thing[minute][second] = reading
        value = new Value({
          sensorname: name,
          sensortype: type,
          sensorhardware_model: model,
          values: thing,
          timestamp_hour: hourISO
        })
        value.save((error) => {
          if (error) reject(error)
          resolve()
        })
      }
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
