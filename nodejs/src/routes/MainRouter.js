var mainRouter = require('express').Router()
var SensorRouter = require('./SensorRouter')
var HostStatusRouter = require('./HostStatusRouter')
var ValueRouter = require('./ValueRouter')

mainRouter.use('/sensors', SensorRouter)
mainRouter.use('/hostStatus', HostStatusRouter)
mainRouter.use('/values', ValueRouter)

mainRouter.get('/settings', (req, res) => {
  require('../infrastructure/SettingsParser').readFrom('./settings.json').then((contents) =>
  {
    res.status(200).json({ success: true, result: contents })
  }).catch((error) => res.status(404).json({ success: false, error: error }))
})
mainRouter.post('/settings', (req, res) => {
  require('../infrastructure/SettingsParser').writeTo('./settings.json', req.body).then((result) =>
  {
    res.status(200).json({ success: true, result: result })
  }).catch((error) => res.status(404).json({ success: false, error: error }))
})
mainRouter.get('/', (req, res) => {
  res.json({ message: 'Connected!' })
})

module.exports = mainRouter
