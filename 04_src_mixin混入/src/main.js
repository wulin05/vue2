import Vue from 'vue'
import App from './App.vue'

// 全局引入混合和调用混合：vm和所有的vc都会得到这两个混合,
// 所以认真看控制台的输出中,有4次的 '我是mixin.js里的"你好呀~~~~~"',因为
// root、App、School、Student四个实例对象
import { hunhe1, hunhe2 } from './mixin'
Vue.mixin(hunhe1)
Vue.mixin(hunhe2)


// vue.config.productionTip = false

new Vue({
  el: '#app',   //注意这个是绑定到index.html文件中的app容器
  render: h => h(App)
})