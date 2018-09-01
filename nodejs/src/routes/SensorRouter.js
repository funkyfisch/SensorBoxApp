const SensorService = require('../services/SensorService')
const SensorRouter = require('express').Router()

SensorRouter.get('/getGeneratedHourlyData', (req, res) => {
  res.status(200).json({ success:true, result: req.params })
})

SensorRouter.get('/all', (req, res) => {
    try {
      let sensors = await SensorService.getAll()
      res.status(200).json({ success:true, result: sensors })
    } catch (error) {
      res.status(500).json({ success:false, error: error })
    }
})

SensorRouter.get('/live', (req, res) => {
  try {
    let data = await SensorService.getLiveData()
    res.status(200).json({ success: true, result: data })
  } catch (error) {
    res.status(500).json({ success: false, error: error })
  }
})

SensorRouter.get('/values/:name&:type&:model', (req, res) => {
  try {
    let value = await SensorService.getValuesOfOneSensor(req.params.name, req.params.type, req.params.model)
    res.status(200).json({ success:true, result: value })
  } catch (error) {
    res.status(404).json({ success: false, error: error })
  }
})

SensorRouter.post('/new/:name&:type&:model', (req, res) => {
  try {
    let message = await SensorService.create(req.params.name, req.params.type, req.params.model)
    res.status(200).json({ success:true, result: message })
  } catch (error) {
    res.status(500).json({ success:false, error: error })
  }
})

SensorRouter.get('/dropSensorsCollection', (req, res) => {
  try {
    let result = await SensorService.dropSensorCollection()
    res.status(200).json({ success: true, message: result }))
  } catch (error) {
    res.status(500).json({ success: false, error: error })
  }
})

SensorRouter.get('*', (req, res) => {
  res.status(404).json({ success:false, result: 'Nothing to see here' })
})

module.exports = SensorRouter
