<template>
  <div>
    <div v-if="loading" class="jumbotron">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title"> Current Load </h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4">
                  <h5> Average Load </h5>
                  <h3> {{this.cpuLoad}} %</h3>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div v-if="this.cpus.length > 0" class="row">
                <div v-for="cpu, index in this.cpus" class="col-lg-3 col-md-3">
                  <h6> core #{{index+1}} </h6>
                  <h6> {{cpu.load.toFixed(2)}} </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Add a chart </h5>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="chartTypeInput">Chart type </label>
                  <select id="chartTypeInput" class="form-control" v-model="chartType">
                    <option v-for="type in chartTypes" :value="type">{{type}}</option>
                  </select>
                </div>
              </form>
              <button class="btn btn-primary" v-on:click="addChart()">Add</button>
            </div>
            <div class="card-footer">
            <div class="row">
          </div>
        </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="chart in chartWidgets">
          <chart-widget :chartType="chart.type"></chart-widget>
        </div>
      </div>
    </div>
    <loading-animation v-else></loading-animation>
  </div>
</template>

<script>
import ChartWidget from '@/components/widgets/Chart.vue'
import LoadingAnimation from '@/components/eyecandy/LoadingAnimation.vue'
export default {
  components: {
    ChartWidget,
    LoadingAnimation
  },
  data () {
    return {
      loading: false,
      chartType: 'bar',
      chartTypes: ['line', 'bar', 'pie', 'radar', 'doughnut'],
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
      },
      chartWidgets: [],
      cpuLoad: {},
      cpus: []
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.loading = true
    }, 3500)
    setInterval(() => {
      this.getCpuLoad()
    }, 1000)
  },
  methods: {
    getCpuLoad: function () {
      this.axios.get('/hostStatus/cpu/currentLoad')
        .then((response) => {
          console.log(response)
          this.cpuLoad = response.data.result.currentload.toFixed(2)
          this.cpus = response.data.result.cpus
        })
    },
    addChart: function () {
      var chart = {
        type: this.chartType,
        options: this.chartOptions
      }
      console.log(this.chartType)
      this.chartWidgets.push(chart)
    }
  }
}
</script>

<style scoped>
</style>
