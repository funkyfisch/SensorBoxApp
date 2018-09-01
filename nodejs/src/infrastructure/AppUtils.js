exports.generateHourlyData = async function(sensorType, sensorID, timestampHour) {
  let generatedHourlyData = {
    timestamp_hour: timestampHour,
    type: sensorType,
    sensorID,
    values: {}
  }
  for (let mins = 0; mins < 60; mins++) {
    generatedHourlyData.values[mins] = {}
    for (let secs = 0; secs< 60; secs++) {
      var value = Math.random()
      generatedHourlyData.values[mins][secs] = value
    }
  }
  return generatedHourlyData
}

/** Generates random data, with parametricised value range, and stores it in an object as per the
*** specification in an article about time-series data at : https://www.mongodb.com/blog/post/schema-design-for-time-series-data-in-mongodb
*** @param sensorType: String that stores the type of sensor
*** @param sensorID: Unique identifier of sensor
*** @param month: Used to derive the exact timestamp that corresponds to the first hour of that month
*** @param year: see month
**/
// function generateMonthlyData (sensorType, sensorID, month, year) {
//   return new Promise((resolve) => {
//     console.log(month, year)
//     var generatedMonthlyData = []
//     var initialHour = 109538
//     var j = 0
//     for (var i = initialHour; j < 720; j++) {
//       generateHourlyData(sensorType, sensorID, i)
//         .then((generatedHourlyData) => {
//           generatedMonthlyData.push(generatedHourlyData)
//           i += 3600000
//         })
//     }
//     resolve(generatedMonthlyData)
//   })
// }
