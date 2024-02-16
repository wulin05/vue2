// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 导入store目录的index.js暴露的store
import store from './store'

new Vue({
  el: '#app',        //绑定index.html文件中的app容器
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})

