////// WIP /////////

var SensorService = require('../services/SensorService')
var si = require('systeminformation')
var BluetoothPort = require('../infrastructure/BluetoothPort')

setInterval(() => {
  BluetoothPort.connectBluetooth()
}, 3000)

var Supervisor = new Object

Supervisor.getHostMachineStatus = async function() {
  let cpuData = await si.currentLoad().catch(error => throw error)

    SensorService.saveSensorReading('cpu0', 'cpuLoad', 'i7', data.cpus[0].load)
    SensorService.saveSensorReading('cpu1', 'cpuLoad', 'i7', data.cpus[1].load)
    SensorService.saveSensorReading('cpu2', 'cpuLoad', 'i7', data.cpus[2].load)
    SensorService.saveSensorReading('cpu3', 'cpuLoad', 'i7', data.cpus[3].load)
  let ramData = await si.mem().catch(error => throw error)

    SensorService.saveSensorReading('memory-used', 'ram', 'undefined', data.used)
    SensorService.saveSensorReading('memory-total', 'ram', 'undefined', data.total)
    SensorService.saveSensorReading('swap-total', 'ram', 'undefined', data.swaptotal)
    SensorService.saveSensorReading('swap-used', 'ram', 'undefined', data.swapused)
  let storageData = await si.fsSize().catch(error => throw error)

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
}

Supervisor.getSensorData = async function() {
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
