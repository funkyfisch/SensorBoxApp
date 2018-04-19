<template>
  <div>
    <div class="jumbotron">
      <div class="row">

        <div v-for="sensor in sensors" class="col-lg-2 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title"> {{sensor.name}} </h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 offset-lg-3 col-sm-12">
                  <h5> Average Load </h5>
                  <h3> {{sensor.value}} </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="row">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      sensors: []
    }
  },
  mounted: function () {
    setInterval(() => {
      this.getLatestSensorReadings()
    }, 2000)
  },
  methods: {
    getLatestSensorReadings: function () {
      this.axios.get('/sensors/live')
        .then((response) => {
          this.sensors = []
          var array = response.data.result
          array.forEach((s) => {
            var sensor = {}
            if (s.indexOf(':') < 0) {
              return
            }
            sensor.name = s.split(':')[0]
            sensor.value = s.split(':')[1]
            this.sensors.push(sensor)
          })
        })
    }
  }
}
</script>

<style scoped>
.card > * {
  text-align: center;
}
</style>
