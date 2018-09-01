const Value = require('../model/Values')

const ValueService = new Object

ValueService.dropValueCollection = async function() {
  try {
    let result = await Value.remove({}).catch(error => throw error)
    return result
  } catch (error) {
    throw error
  }
}

module.exports = ValueService
