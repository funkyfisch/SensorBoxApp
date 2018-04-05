<template>
  <div>
    <div v-if="loading" class="jumbotron">
      <button class="btn btn-primary"v-on:click="goToHostStatus()">Host Status</button>
      <button class="btn btn-success">Other Stuff</button>
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
      loading: true,
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
    goToHostStatus: function () {
      this.$router.push('/hostStatus')
    },
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
