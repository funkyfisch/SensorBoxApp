var si = require('systeminformation')
var HostStatusService = new Object


HostStatusService.getBasicInfo = function() {
  return new Promise((resolve, reject) => {
    var result = {}
    si.system()
      .then((data) => {
        result.system = data
        si.bios()
          .then((data) => {
            result.bios = data
            si.battery()
              .then((data) => {
                result.baseboard = data
                resolve(result)
              })
              .catch((error) => {
                reject(error)
              })
          })
          .catch((error) => {
            reject(error)
          })
      })
      .catch((error) => {
        reject(error)
      })
  })
}

HostStatusService.getCpuLoads = function() {
  return new Promise((resolve, reject) => {
    si.currentLoad()
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

HostStatusService.getMemoryUsage = function() {
  return new Promise((resolve, reject) => {
    si.mem()
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
HostStatusService.getStorageUsage = function() {
  return new Promise((resolve, reject) => {
    si.fsSize()
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

module.exports = HostStatusService
