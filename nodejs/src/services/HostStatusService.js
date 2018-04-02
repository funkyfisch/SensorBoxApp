var si = require('systeminformation')
var HostStatusService = new Object


HostStatusService.getBasicInfo = function() {
  return new Promise((resolve, reject) => {
    var result = {}
    si.system()
      .then((data) => {
        result.system = data
        resolve(result)
      })
      .catch((error) => {
        reject(error)
      })
    si.bios()
      .then((data) => {
        result.bios = data
      })
      .catch((error) => {
        reject(error)
      })
    si.baseboard()
      .then((data) => {
        result.baseboard = data
      })
      .catch((error) => {
        reject(error)
      })
  })
}

module.exports = HostStatusService
