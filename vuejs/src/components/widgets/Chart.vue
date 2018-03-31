<template>
  <div class="card">
    <div class="card-header">Last Hour Data
    </div>
    <div class="card-body">
    <div class="chart-container">
      <canvas ref="mychart"></canvas>
    </div>
  </div>
  </div>
</template>

<script>
import Chartjs from 'chart.js'
import axios from 'axios'
export default {
  name: 'chart-widget',
  props: ['chartType'],
  data () {
    return {
      mychart: {},
      chartData: {
        labels: [],
        datasets: [{
          pointBorderWidth: 0,
          pointRadius: 1,
          label: 'Sensor value',
          data: [],
          lineTension: 0,
          spanGaps: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }, {
          label: 'Other',
          data: [],
          lineTension: 0,
          spanGaps: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
        ]
      },
      chartOptions: {
        scales: {
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    }
  },
  watch: {
    'chartType': function () {
      this.updateChart()
    },
    mychart: function () {
      console.log('hajsd')
    }
  },
  mounted: function () {
    this.createChart()
    this.getSensorValues()
    setInterval(() => {
      this.getSensorValues()
    }, 5000)
  },
  methods: {
    getSensorValues: function () {
      axios.get('/sensors/values/cpu0&cpuLoad&i7')
        .then((response) => {
          var now = new Date()
          var hour = now.getHours()
          var minutes = now.getMinutes()
          var seconds = now.getSeconds()
          var hourISO = new Date(now.getYear(), now.getMonth(), now.getDay(), hour, 0, 0)
          var sensorData = response.data.result
          this.mychart.data.labels = []
          this.mychart.data.datasets[0].data = []
          sensorData.forEach((hourOfData) => {
            if (hourOfData.timestamp_hour === hourISO) {
              for (var i = 0; i < minutes; i++) {
                for (var j = 0; j < seconds; j++) {
                  if (hourOfData.values[i][j] !== '0') {
                    this.mychart.data.labels.push(`${i}:${j}`)
                    this.mychart.data.datasets[0].data.push(hourOfData[i][j])
                  }
                }
              }
            } else {
              console.log(hourOfData.values)
              for (i = 0; i < 60; i++) {
                for (j = 0; j < 60; j++) {
                  if (hourOfData.values[i][j] !== '0') {
                    this.mychart.data.labels.push(`${i}:${j}`)
                    this.mychart.data.datasets[0].data.push(hourOfData.values[i][j])
                  }
                }
              }
            }
          })
          // if (this.mychart.data.datasets[0].data.length > 100) {
          //   this.mychart.data.datasets[0].data.shift()
          //   this.mychart.data.labels.shift()
          // }
          // this.mychart.data.labels.push(`${minutes}:${seconds}`)
          // this.mychart.data.datasets[0].data.push(sensorData[minutes][seconds])
          this.mychart.update()
        })
    },
    createChart () {
      var ctx = this.$refs.mychart
      this.mychart = new Chartjs(ctx, {
        type: this.chartType,
        data: this.chartData,
        options: this.chartOptions
      })
      console.log('created')
    }
  }
}
</script>

<style scoped>
</style>
