var SerialPort = require('serialport')
var Readline = SerialPort.parsers.Readline
var port = new SerialPort('/dev/rfcomm0', { autoOpen: false, baudRate: 9600 })
var parser = new Readline()
var isOpen = false
var latestSensorReadings = ''
var getLatestSensorReadings = function() {
  return latestSensorReadings
}
var getData = function(data) {
  latestSensorReadings = data
}
port.pipe(parser)

var connectBluetooth = function() {
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
