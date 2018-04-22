var Value = require('../model/Values')

var ValueService = new Object

ValueService.dropValueCollection = function() {
  return new Promise((resolve, reject) => {
    Value.remove({}, (err) => {
      if (err) reject(err)
      else resolve('Values collection dropped')
    })
  })
}

module.exports = ValueService
