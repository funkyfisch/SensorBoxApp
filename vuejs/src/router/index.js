import Vue from 'vue'
import Router from 'vue-router'
import TestPage from '@/components/TestPage.vue'
import HostStatus from '@/components/views/HostStatus.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      title: 'Home',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/hostStatus',
      meta: 'Host Status',
      name: 'HostStatus',
      component: HostStatus
    }
  ]
})
