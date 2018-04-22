var fs = require('fs')

var SettingsParser = new Object

SettingsParser.readFrom = function(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, file) => {
      if (err) reject(err)
      else {
        var contents = JSON.parse(file)
        resolve(contents)
      }
    })
  })
}

SettingsParser.writeTo = function(path, settings) {
  return new Promise((resolve, reject) => {
    var contents = JSON.stringify(settings)
    fs.writeFile(path, contents, (err) => {
      if (err) reject(err)
      else resolve('Settings Updated')
    })
  })
}

module.exports = SettingsParser
