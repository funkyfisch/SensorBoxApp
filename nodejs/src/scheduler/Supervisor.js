var SensorService = require('../services/SensorService')
var si = require('systeminformation')
var BluetoothPort = require('../infrastructure/BluetoothPort')

setInterval(() => {
  BluetoothPort.connectBluetooth()
}, 3000)

var Supervisor = new Object

Supervisor.getHostMachineStatus = function() {
  return new Promise((resolve, reject) => {
    si.currentLoad().then((data) => {
      SensorService.saveSensorReading('cpu0', 'cpuLoad', 'i7', data.cpus[0].load)
      SensorService.saveSensorReading('cpu1', 'cpuLoad', 'i7', data.cpus[1].load)
      SensorService.saveSensorReading('cpu2', 'cpuLoad', 'i7', data.cpus[2].load)
      SensorService.saveSensorReading('cpu3', 'cpuLoad', 'i7', data.cpus[3].load)
    })
    si.mem().then((data) => {
      SensorService.saveSensorReading('memory-used', 'ram', 'undefined', data.used)
      SensorService.saveSensorReading('memory-total', 'ram', 'undefined', data.total)
      SensorService.saveSensorReading('swap-total', 'ram', 'undefined', data.swaptotal)
      SensorService.saveSensorReading('swap-used', 'ram', 'undefined', data.swapused)
    })
    si.fsSize().then((data) => {
      data.forEach((device) => {
        SensorService.saveSensorReading(device.type, 'storage', 'undefined', device.fs)
        SensorService.saveSensorReading(device.fs, 'size', 'undefined', device.size)
        SensorService.saveSensorReading(device.fs, 'used', 'undefined', device.used)
      })
    })
      .catch((error) => {
        reject(error)
      })
    resolve()
  })
}

Supervisor.getSensorData = function() {
  return new Promise((resolve, reject) => {
    var array = []
    var readings = BluetoothPort.getLatestSensorReadings()
    if (readings === '') {
      reject('No readings. something went wrong')
    }
    else {
      array = readings.split(',')
      array.pop()
      array.forEach((sensor) => {
        var name = sensor.split(':')[0]
        var reading = sensor.split(':')[1]
        SensorService.saveSensorReading(name, 'undefined', 'undefined', reading)
      })
      resolve(array)
    }
  })
}

var jobQueue = [Supervisor.getHostMachineStatus]

Supervisor.start = function() {
  setInterval(() => {
    var interval = 10000
    jobQueue.forEach((job) => {
      setTimeout(() => {
        job()
      }, interval)
      interval += 1000
    })
  }, 10000)
}

module.exports = Supervisor
