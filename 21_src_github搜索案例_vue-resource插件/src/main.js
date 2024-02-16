// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// ##############引入vue-resource插件
import vueResource from 'vue-resource'
// ##############使用插件: 当用上这个插件后,console.log(this)的vc内容比原先多了$http这个属性; 可以往原型上、实例上加插件
Vue.use(vueResource)

// 关闭Vue的生产提示
Vue.config.productionTip = false

new Vue({
  el: '#app',        //注意这个是绑定到index.html文件中的app容器
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})