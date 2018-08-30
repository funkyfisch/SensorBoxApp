var Value = require('../model/Values')

var ValueService = new Object

ValueService.dropValueCollection = async function() {
  let result = await Value.remove({}).catch(error => throw error)
  return result
}

module.exports = ValueService
