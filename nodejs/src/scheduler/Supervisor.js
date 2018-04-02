var SensorService = require('../services/SensorService')
var si = require('systeminformation')

var Supervisor = new Object

Supervisor.getHostMachineStatus = function() {
  return new Promise((resolve, reject) => {
    si.currentLoad().then((data) => {
      SensorService.saveSensorReading('cpu0', 'cpuLoad', 'i7', data.cpus[0].load)
        .then(() => console.log('values'))
        .catch((error) => reject(error))
      resolve('Sensor data saved')
    })
  })
}

Supervisor.getSimplePong = function() {
  console.log('pong')
}

var jobQueue = [Supervisor.getHostMachineStatus]

Supervisor.start = function() {
  setInterval(() => {
    var interval = 1000
    jobQueue.forEach((job) => {
      setTimeout(() => {
        job()
      }, interval)
      interval += 1000
    })
  }, 1000)
}

module.exports = Supervisor
