import Vue from 'vue'
import Router from 'vue-router'
import api from '@/core/api/index'
// console.log(global.getParam())


Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: '/',
    component: resolve => require(['@/components/home'], resolve),
    redirect: "info",
    children: [{
        path: 'info',
        name: 'info',
        component: resolve => require(['@/components/main/info'], resolve)
      },
      {
        path: 'news',
        name: 'news',
        component: resolve => require(['@/components/main/news'], resolve),
        children: [{
          path: 'childCom',
          name: 'childCom',
          component: resolve => require(['@/components/child/childCom'], resolve)
        }]
      },
      {
        path: 'test',
        name: 'test',
        component: resolve => require(['@/components/main/test'], resolve),
      },
      {
        path: 'msea/:id',
        name: 'msea',
        component: resolve => require(['@/components/main/msea'], resolve),
      }
    ]
  }]
})



export default router;
