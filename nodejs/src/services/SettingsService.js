var sp = require('../infrastructure/SettingsParser')
var SettingsService = new Object

SettingsService.initialise = function() {
  return new Promise((resolve, reject) => {
    sp.createSettingsFile('../../settings.json')
      .then((message) => resolve(message))
      .then((message) => console.log('test' + message))
      .catch((error) => reject(error))
    // first check if there is a file
    // if not, run createSettingsFile

  })
}

SettingsService.getSettings = function() {
  return new Promise((resolve, reject) => {
    // when a request is made to display the settings somewhere
    sp.readFrom('./settings.json')
      .then((settings) => resolve(settings))
      .catch((error) => reject(error))
  })
}

SettingsService.setSettings = function(settings) {
  return new Promise((resolve, reject) => {
    // when a request to save new changes to the settings are made
    sp.writeTo('./settings.json', settings)
      .then((result) => resolve(result))
      .catch((error) => reject(error))
  })
}

// internal function for automated generation of settings file when unavailable


module.exports = SettingsService
