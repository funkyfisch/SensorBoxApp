var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ValueSchema = new Schema({
  sensorid: { type: String },
  sensorname: { type: String, required: true },
  sensortype: { type: String, required: true },
  sensorhardware_model: { type: String, required: true },
  values: { type: Object },
  timestamp_minute : { type: Date, required: true }
})

module.exports = mongoose.model('Value', ValueSchema)
