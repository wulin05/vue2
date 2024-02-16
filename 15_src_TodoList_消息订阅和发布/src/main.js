import Vue from 'vue'
import App from './App.vue'

// vue.config.productionTip = false

new Vue({
  el: '#app',   //注意这个是绑定到index.html文件中的app容器
  render: h => h(App),

  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})