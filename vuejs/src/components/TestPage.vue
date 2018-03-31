<template>
  <div>
    <div v-if="loading">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
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
      cpuLoad: {}
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.loading = true
    }, 3500)
  },
  methods: {
    // getCpuLoad: function () {
    //   this.axios.post('/sensors/values/cpu0&cpuLoad&i7')
    //     .then((response) => {
    //       this.cpuLoad = response.data.result
    //     })
    // },
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
