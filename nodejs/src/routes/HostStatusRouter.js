const HostStatusService = require('../services/HostStatusService')
const HostStatusRouter = require('express').Router()

HostStatusRouter.get('/overview', (req, res) => {
  try {
    let result = await HostStatusService.getBasicInfo()
    res.status(200).json({ success: true, result: result })
  } catch (error) {
    res.status(500).json({ success: false, error: error })
  }
})

HostStatusRouter.get('/cpu/currentLoad', (req, res) => {
  try {
    let result = await HostStatusService.getCpuLoads()
    res.status(200).json({ success: true, result: result })
  } catch (error) {
    res.status(500).json({ success: false, error: error })
  }
})

HostStatusRouter.get('/memory', (req, res) => {
  try {
    let result = await HostStatusService.getMemoryUsage()
    res.status(200).json({ success: true, result: result })
  } catch (error) {
    res.status(500).json({ success: false, error: error })
  }
})

HostStatusRouter.get('/storage', (req, res) => {
  try {
    let result = await HostStatusService.getStorageUsage()
    res.status(200).json({ success: true, result: result })
  } catch (error) {
    res.status(500).json({ success: false, error: error})
  }
})

module.exports = HostStatusRouter
