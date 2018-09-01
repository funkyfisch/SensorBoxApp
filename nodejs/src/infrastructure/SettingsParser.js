const fs = require('fs')

const SettingsParser = new Object

SettingsParser.readFrom = async function(file) {
  fs.readFile(file, (err, file) => {
    if (err) throw err
    else {
      var contents = JSON.parse(file, null, 2)
      return contents
    }
  })
}

SettingsParser.writeTo = async function(file, settings) {
  var contents = JSON.stringify(settings, null, 2);
  fs.writeFile(file, contents, (err) => {
    if (err) throw err
    else return 'Settings Updated'
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
