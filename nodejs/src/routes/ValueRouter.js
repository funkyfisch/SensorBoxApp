const ValueService = require('../services/ValueService')
const ValueRouter = require('express').Router()

ValueRouter.get('/dropValuesCollection', (req, res) => {
  try {
    let result = await ValueService.dropValueCollection()
    res.status(200).json({ success: true, message: result }))
  } catch (error) {
    res.status(500).json({ success: false, error: error })
  }
})

module.exports = ValueRouter
