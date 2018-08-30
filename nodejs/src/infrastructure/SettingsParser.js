var fs = require('fs')

var SettingsParser = new Object

SettingsParser.readFrom = function(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, file) => {
      if (err) reject(err)
      else {
        var contents = JSON.parse(file)
        resolve(contents)
      }
    })
  })
}

SettingsParser.writeTo = function(file, settings) {
  return new Promise((resolve, reject) => {
    var contents = JSON.stringify(settings)
    fs.writeFile(file, contents, (err) => {
      if (err) reject(err)
      else resolve('Settings Updated')
    })
  })
}

var fileExists = function(file) {
  return new Promise((resolve, reject) => {
    // fs.find(file, (err) => {
    //   if (err) reject(err)
    //   else resolve(true)
    // })
    console.log(file)
    reject('test2')
    setTimeout(() => {
      resolve()
    }, 4000)
  })
}

SettingsParser.createSettingsFile = function() {
  return new Promise((resolve, reject) => {
    fileExists('../../settings.json')
      .then((result) => {
        if (result === true) resolve('File already exists')
        else reject(result)
      })
      .catch((error) => {
        console.log(error)
        SettingsParser.writeTo('./settings.json', settingsFileTemplate)
        resolve('Created new file')
      })
  })
}

var settingsFileTemplate =
  [
    {
      name: 'schedulerEnabled',
      type: 'boolean',
      value: 'truehyscjndaskfladsfdjklfds'
    }
  ]

module.exports = SettingsParser
