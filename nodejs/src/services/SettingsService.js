var sp = require('../infrastructure/SettingsParser')
var SettingsService = new Object

SettingsService.initialise = async function() {
  // first check if there is a file
  // if not, run createSettingsFile
  let message = await sp.createSettingsFile('../../settings.json').catch(error => throw error)
  console.log('test' + message)
}

SettingsService.getSettings = async function() {
    // when a request is made to display the settings somewhere
    let settings = await sp.readFrom('./settings.json').catch(error => throw error)
    return settings
  }

SettingsService.setSettings = async function(settings) {
    // when a request to save new changes to the settings are made
    let result = await sp.writeTo('./settings.json', settings).catch(error => throw error)
    return result
}

// internal function for automated generation of settings file when unavailable
module.exports = SettingsService
