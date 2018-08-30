var si = require('systeminformation')
var HostStatusService = new Object

HostStatusService.getBasicInfo = function() {
    let result = {}
    let resultError = {}
    result.system = await si.system().catch(error => resultError.system = error)
    result.bios = await si.bios().catch(error => resultError.bios = error)
    result.baseboard = await si.battery().catch(error => resultError.baseboard = error)
    if (result !== {}) throw resultError
    else return result
}

HostStatusService.getCpuLoads = async function() {
    return await si.currentLoad().catch(error => throw error)
}

HostStatusService.getMemoryUsage = async function() {
  return await si.mem().catch(error => throw error)
}
HostStatusService.getStorageUsage = async function() {
  return await si.fsSize().catch(error => throw error)
}

module.exports = HostStatusService
