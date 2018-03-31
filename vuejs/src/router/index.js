import Vue from 'vue'
import Router from 'vue-router'
import TestPage from '@/components/TestPage.vue'
import AnotherAnimation from '@/components/eyecandy/AnotherAnimation.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/animation',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/',
      name: 'Animation',
      component: AnotherAnimation
    }
  ]
})
