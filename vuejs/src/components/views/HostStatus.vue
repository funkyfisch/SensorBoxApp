<template>
  <div>
    <div class="jumbotron">
      <div class="row">

        <div class="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title"> Current Load </h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 offset-lg-3 col-sm-12">
                  <h5> Average Load </h5>
                  <h3> {{this.cpuLoad}} %</h3>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div v-if="this.cpus.length > 0" class="row">
                <div v-for="cpu, index in this.cpus" class="col-lg-3 col-sm-3">
                  <h6> core #{{index+1}} </h6>
                  <h6> {{cpu.load.toFixed(2)}} </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title"> Storage </h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 offset-lg-3 col-sm-12">
                  <h5> Used / Total (GB) </h5>
                  <h3> {{this.totalStorageUsed}} / {{this.totalStorageSize}}</h3>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div v-if="this.cpus.length > 0" class="row">
                <div v-for="dev, index in this.storageDevices" class="col-lg-3 col-sm-4">
                  <h6> {{dev.fs}} </h6>
                  <h6> {{dev.used}} / {{dev.size}} </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title"> RAM Usage </h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3">
                  <h5> Used / Total (MB)</h5>
                  <h3> {{this.memory.used}} / {{this.memory.total}}</h3>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-lg-4 col-sm-4">
                  <h6> Swap Total </h6>
                  <h6> {{this.memory.swaptotal}} MB</h6>
                </div>
                <div class="col-lg-4 col-sm-4">
                  <h6> Swap Used </h6>
                  <h6> {{this.memory.swapused}} MB</h6>
                </div>
                <div class="col-lg-4 col-sm-4">
                  <h6 class="primary"> Swap Free </h6>
                  <h6> {{this.memory.swapfree}} MB</h6>
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
      cpuLoad: {},
      cpus: [],
      memory: {},
      storageDevices: []
    }
  },
  computed: {
    totalStorageSize: function () {
      let size = 0
      if (this.storageDevices.length > 0) {
        this.storageDevices.forEach((dev) => {
          size += parseFloat(Math.round(dev.size).toFixed(2))
        })
      }
      return size
    },
    totalStorageUsed: function () {
      let size = 0
      if (this.storageDevices.length > 0) {
        this.storageDevices.forEach((dev) => {
          size += parseFloat(Math.round(dev.used).toFixed(2))
        })
      }
      return size
    }
  },
  mounted: function () {
    setInterval(() => {
      this.getCpuLoad()
      this.getMemoryUsage()
      this.getStorageUsage()
    }, 1000)
  },
  methods: {
    getCpuLoad: function () {
      this.axios.get('/hostStatus/cpu/currentLoad')
        .then((response) => {
          this.cpuLoad = response.data.result.currentload.toFixed(2)
          this.cpus = response.data.result.cpus
        })
    },
    getMemoryUsage: function () {
      this.axios.get('/hostStatus/memory')
        .then((response) => {
          this.memory.total = Math.floor(response.data.result.total / 1000000)
          this.memory.used = Math.floor(response.data.result.used / 1000000)
          this.memory.swaptotal = Math.floor(response.data.result.swaptotal / 1000000)
          this.memory.swapused = Math.floor(response.data.result.swapused / 1000000)
          this.memory.swapfree = Math.floor(response.data.result.swapfree / 1000000)
        })
    },
    getStorageUsage: function () {
      this.axios.get('/hostStatus/storage')
        .then((response) => {
          this.storageDevices = response.data.result
          this.storageDevices.forEach((dev) => {
            dev.size = Math.round(dev.size / 1000000000).toFixed(1)
            dev.used = Math.round(dev.used / 1000000000).toFixed(1)
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
