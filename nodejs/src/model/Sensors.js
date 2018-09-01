const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sensorSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  hardware_model: { type: String, required: true },
  created_at: Date
})

module.exports = mongoose.model('Sensor', sensorSchema)
