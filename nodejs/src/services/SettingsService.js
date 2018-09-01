const SettingSettingsParserarser = require('../infrastructure/SettingSettingsParserarser')
const SettingsService = new Object

SettingsService.initialise = async function() {
  // first check if there is a file
  // if not, run createSettingsFile
  try {
    let message = await SettingsParser.createSettingsFile('../../settings.json')
    console.log('test' + message)
  } catch (error) {
    console.log(error)
  }
}

SettingsService.getSettings = async function() {
  // when a request is made to diSettingsParserlay the settings somewhere
  try {
    let settings = await SettingsParser.readFrom('./settings.json')
    return settings
  } catch (error) {
    throw error
  }
}

SettingsService.setSettings = async function(settings) {
    // when a request to save new changes to the settings are made
    try {
      let result = await SettingsParser.writeTo('./settings.json', settings)
      return result
    } catch (error) {
      throw error
    }
}

// internal function for automated generation of settings file when unavailable
module.exports = SettingsService
