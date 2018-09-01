const MainRouter = require('express').Router()
const SensorRouter = require('./SensorRouter')
const HostStatusRouter = require('./HostStatusRouter')
const ValueRouter = require('./ValueRouter')
const SettingsParser = require('../infrastructure/SettingsParser')


MainRouter.use('/sensors', SensorRouter)
MainRouter.use('/hostStatus', HostStatusRouter)
MainRouter.use('/values', ValueRouter)

MainRouter.get('/settings', (req, res) => {
  try {
    let contents = await SettingsParser.readFrom('./settings.json')
    res.status(200).json({ success: true, result: contents })
  } catch (error) {
    res.status(500).json({ success: false, error: error }))
  }
})

MainRouter.post('/settings', (req, res) => {
  try {
    let result = await SettingsParser.writeTo('./settings.json', req.body).then((result) =>
    res.status(200).json({ success: true, result: result })
  } catch (error) {
    res.status(500).json({ success: false, error: error }))
  }
})

MainRouter.get('/', (req, res) => {
  res.json({ message: 'Connected!' })
})

module.exports = MainRouter
