import Vue from 'vue'
import Router from 'vue-router'
import api from '@/core/api/index'
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'app',
    component: resolve => require(['@/App'], resolve),
    redirect: "home",
    children: [{
        path: 'home',
        name: 'home',
        meta:{
          keepAlive:false,
          title:"我是信息页"
        },
        component: resolve => require(['@/components/home'], resolve)
      },
      {
        path: 'news',
        name: 'news',
        meta:{
          keepAlive:false,
          title:"我是新闻页"
        },
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
        meta:{
          title:"我是测试页"
        }
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
