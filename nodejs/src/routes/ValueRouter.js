var dbService = require('../services/ValueService')
var ValueRouter = require('express').Router()

ValueRouter.get('/dropValuesCollection', (req, res) => {
  dbService.dropValueCollection()
    .then((result) => res.status(200).json({ success: true, message: result }))
})

module.exports = ValueRouter
