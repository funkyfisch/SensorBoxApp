const si = require('systeminformation')
var mainRouter = require('express').Router()
var SensorRouter = require('./SensorRouter')

mainRouter.use('/sensors', SensorRouter)

mainRouter.get('/getCpuLoad', (req, res) => {
  si.currentLoad()
    .then(result => res.json({ success: true, result: result }))
})
mainRouter.get('/', (req, res) => {
  res.json({ message: 'Connected!' })
})
module.exports = mainRouter
