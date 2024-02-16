import Vue from 'vue'
import App from './App.vue'

// vue.config.productionTip = false

// 先引入插件
import plugins from './plugins'
//使用插件,记住,必须先在创建Vue实例前
Vue.use(plugins)


new Vue({
  el: '#app',   //注意这个是绑定到index.html文件中的app容器
  render: h => h(App)
})