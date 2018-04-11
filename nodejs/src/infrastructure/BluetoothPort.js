var SerialPort = require('serialport')

var Readline = SerialPort.parsers.Readline

var parser = new Readline()

var port = new SerialPort('/dev/rfcomm0', {
  baudRate: 9600
})

port.pipe(parser)
parser.on('data', console.log)

port.on('open', function() {
  console.log('Successfully opened bluetooth port')
})
