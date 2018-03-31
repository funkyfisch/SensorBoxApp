// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

import App from './App'

import router from './router/index'
// libraries
import chartjs from 'chartjs'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// global library setup
Object.defineProperty(Vue.prototype, '$chartjs', {
  value: chartjs
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
