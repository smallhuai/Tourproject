import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/border.css'
import '@/assets/css/reset.css'
import "@/common/css/index.scss"
import 'lib-flexible/flexible.js'
import fastclick from "fastclick"
// 引入core.config.js
import core from "@/core/core.config"
Vue.use(core);
Vue.config.productionTip = false
fastclick.attach(document.body);
//引入vuex数据仓库
import store from "@/core/store/index"
//引入动态title
Vue.use(require('vue-wechat-title'));
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
