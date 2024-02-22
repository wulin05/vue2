// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue的生产提示： 最好写到import之后,Vue.use()之前
Vue.config.productionTip = false

// 1.引入vue-router（先安装vue-router插件：vue2是npm i vue-router@3; vue3是npm i vue-router就可以安装最新的)
import VueRouter from 'vue-router'
// 2.应用插件
Vue.use(VueRouter)

// 3.创建router目录,并配置index.js,得到创建并暴露出来的路由器router
// 4.引入从index.js暴露出来的路由器router...
import router from './router/index.js'

// 使用Vuex,与本节无关
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App),
  // 5.配置router路由器项
  router,
  store,
})

/*
6.创建components目录,存放一般组件,即、将banner.vue放到该目录下
  创建pages目录,存放路由组件,即、将about.vue和home.vue等等路由组件存放到该目录下
*/

