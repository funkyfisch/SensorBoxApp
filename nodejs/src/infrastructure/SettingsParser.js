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

var fileExists = async function(file) {
  // fs.find(file, (err) => {
  //   if (err) reject(err)
  //   else resolve(true)
  // })
  console.log(file)
  return 'test2'
  setTimeout(() => {
    return
  }, 4000)
}

SettingsParser.createSettingsFile = async function() {
  let settingsExists = await fileExists('../../settings.json')
  if (settingsExists === true) return 'File already exists'
  else {
    SettingsParser.writeTo('./settings.json', settingsFileTemplate)
    return 'File created!'
  }
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
