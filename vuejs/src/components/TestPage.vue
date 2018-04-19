<template>
  <div>
    <div v-if="loading" class="jumbotron">
      <button class="btn btn-primary"v-on:click="goToHostStatus()">Host Status</button>
      <button class="btn btn-success" v-on:click="goToHouseSensors">Other Stuff</button>
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
  },
  methods: {
    goToHostStatus: function () {
      this.$router.push('/hostStatus')
    },
    goToHouseSensors: function () {
      this.$router.push('/houseSensors')
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
