const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline
const port = new SerialPort('/dev/rfcomm0', { autoOpen: false, baudRate: 9600 })
const parser = new Readline()
let isOpen = false
let latestSensorReadings = ''
const getLatestSensorReadings = function() {
  return latestSensorReadings
}
const getData = function(data) {
  latestSensorReadings = data
}
port.pipe(parser)

const connectBluetooth = function() {
  if (isOpen) return
  port.open(function (err) {
    if (err) {
      console.log('Error opening port: ', err.message)
    }
    // Because there's no callback to write, write errors will be emitted on the port
  })
}
// The open event is always emitted
parser.on('data', getData)
port.on('open', function() {
  isOpen = true
})
port.on('close', () => {
  isOpen = false
})
module.exports.latestSensorReadings = latestSensorReadings
module.exports.connectBluetooth = connectBluetooth
module.exports.getLatestSensorReadings = getLatestSensorReadings
