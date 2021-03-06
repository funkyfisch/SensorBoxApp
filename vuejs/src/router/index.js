import Vue from 'vue'
import Router from 'vue-router'
import TestPage from '@/components/TestPage.vue'
import HostStatus from '@/components/views/HostStatus.vue'
import HouseSensors from '@/components/views/HouseSensors.vue'
import Settings from '@/components/views/Settings.vue'
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
    },
    {
      path: '/houseSensors',
      meta: 'House Sensors',
      name: 'HouseSensors',
      component: HouseSensors
    },
    {
      path: '/settings',
      meta: 'Settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
