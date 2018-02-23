import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries'
import AlarmMgr from '@/components/AlarmMgr'
import VeeValidate from '@/components/VeeValidate'

Vue.use(Router)

// LogTime 属于我们 TimeEntries 组件的一个子路由，所以我们依旧需要配置一下我们的路由，并利用 webpack 让它懒加载，减少我们首屏加载的流量
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/time-entries',
      component: TimeEntries,
      children: [
        {
          path: 'log-time',
          // 懒加载
          component: resolve => require(['../components/LogTime.vue'], resolve)
        }
      ]
    },{
      path: '/alarmmgr',
      name: 'alarmmgr',
      component: AlarmMgr
    },{
      path: '/vee-validate',
      name: 'vee-validate',
      component: VeeValidate
    },{
      path: '*',
      redirect: '/home'
    }
  ]
})
