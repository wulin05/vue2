// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 1.引入vue-router（先安装vue-router插件：vue2是npm i vue-router@3; vue3是npm i vue-router就可以安装最新的)
import VueRouter from 'vue-router'
// 2.应用插件
Vue.use(VueRouter)

// 3.创建router目录,并配置index.js,得到创建并暴露出来的路由器router
// 4.引入路由器
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
6.创建components目录,并创建相关的vue组件：about.vue和home.vue是路由组件; banner.vue是一般组件
  所以,创建pages目录,存放路由组件,即、将about.vue和home.vue存放到这个pages目录下
*/

// 上边有部分是vuex插件的内容,我只是想在本节运用上,跟本节关系不大。
