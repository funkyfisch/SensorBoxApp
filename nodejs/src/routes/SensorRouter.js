var sensorService = require('../services/SensorService')
var sensorRouter = require('express').Router()

sensorRouter.get('/getGeneratedHourlyData', (req, res) => {
  res.status(200).json({ success:true, result: req.params })
})

sensorRouter.get('/all', (req, res) => {
  sensorService.getAll()
    .then((sensors) => {
      res.status(200).json({ success:true, result: sensors })
    })
    .catch(() => {
      res.status(404).json({ success:false, error: 'Service Error' })
    })
})

sensorRouter.get('/live', (req, res) => {
  sensorService.getLiveData()
    .then((data) => {
      res.status(200).json({ success: true, result: data })
    })
    .catch((error) => {
      res.status(404).json({ success: false, error: error })
    })
})

sensorRouter.get('/values/:name&:type&:model', (req, res) => {
  sensorService.getValuesOfOneSensor(req.params.name, req.params.type, req.params.model)
    .then((value) => {
      res.status(200).json({ success:true, result: value })
    })
    .catch((error) => {
      res.status(404).json({ success: false, error: error })
    })
})

sensorRouter.post('/new/:name&:type&:model', (req, res) => {
  sensorService.create(req.params.name, req.params.type, req.params.model)
    .then((message) => {
      res.status(200).json({ success:true, result: message })
    })
    .catch((error) => {
      res.status(404).json({ success:false, error: error })
    })
})
sensorRouter.get('*', (req, res) => {
  res.status(404).json({ success:false, result: 'Nothing to see here' })
})

module.exports = sensorRouter
