<template>
<div style="position:absolute;top: 50%; left: 50%;
transform: translate(-50%,-50%);
height: 50%;
width: 50%;">
<button v-on:click="toggleLoader()">Refresh</button>
<aptiv-loader v-if="loading">
</aptiv-loader>
</div>
</template>
<script>
import AptivLoader from '@/components/eyecandy/AptivLoader.vue'
export default {
  components: {
    AptivLoader
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    toggleLoader () {
      this.loading = !this.loading
    }
  }
}
</script>
<style>
</style>
