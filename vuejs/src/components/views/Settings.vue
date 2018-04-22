<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <div v-for="setting in this.settingsList" class="row">
          <div class="col-lg-4">
            <span>{{setting.name}}</span>
          </div>
          <div>
            <input type="text" v-model="setting.value"></input>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div v-if="this.settingsList.length > 0" class="row">
        <div class="col-lg-1">
          <button class="btn btn-success" v-on:click="setSettings">Update</button>
        </div>
        <div class="col-lg-1">
          <button class="btn btn-primary" v-on:click="getSettings">Reset</button>
        </div>
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
      updateLabel: null,
      settingsList: []
    }
  },
  mounted: function () {
    this.getSettings()
  },
  methods: {
    setSettings: function () {
      console.log(this.settingsList)
      this.axios.post('/settings', this.settingsList)
        .then((response) => {
          this.updateLabel = response.data.result
        })
    },
    getSettings: function () {
      this.axios.get('/settings')
        .then((response) => {
          this.settingsList = response.data.result
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
