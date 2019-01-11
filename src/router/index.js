import Vue from 'vue'
import Router from 'vue-router'
import electronic from '@/components/electronic/electronic'
import abnormal from '@/components/electronic/components/abnormal'
import workingCondition from '@/components/electronic/components/workingCondition'
import workshopTask from '@/components/electronic/components/workshopTask'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'electronic',
      component: electronic
    },{
      path: '/abnormal',
      name: 'abnormal',
      component: abnormal
    },{
    //   path: '/workingCondition',
    //   name: 'workingCondition',
    //   component: workingCondition
    // },{
      path: '/workshopTask',
      name: 'workshopTask',
      component: workshopTask
    }
  ]
})
