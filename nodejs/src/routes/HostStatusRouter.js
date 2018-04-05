var hostStatusService = require('../services/HostStatusService')
var hostStatusRouter = require('express').Router()

hostStatusRouter.get('/overview', (req, res) => {
  hostStatusService.getBasicInfo()
    .then((result) => {
      res.status(200).json({ success: true, result: result })
    })
    .catch((error) => {
      res.status(404).json({ success: false, error: error })
    })
})
hostStatusRouter.get('/cpu/currentLoad', (req, res) => {
  hostStatusService.getCpuLoads()
    .then((result) => {
      res.status(200).json({ success: true, result: result })
    })
    .catch((error) => {
      res.status(404).json({ success: false, error: error })
    })
})
hostStatusRouter.get('/memory', (req, res) => {
  hostStatusService.getMemoryUsage()
    .then((result) => {
      res.status(200).json({ success: true, result: result })
    })
    .catch((error) => {
      res.status(404).json({ success: false, error: error })
    })
})
hostStatusRouter.get('/storage', (req, res) => {
  hostStatusService.getStorageUsage()
    .then((result) => {
      res.status(200).json({ success: true, result: result })
    })
    .catch((error) => {
      res.status(404).json({ success: false, error: error })
    })
})

module.exports = hostStatusRouter
