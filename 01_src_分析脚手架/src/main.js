/* 
 该文件是整个项目的入口文件
*/

//引入vue,这个是残缺版的vue,没有模板解析功能,所以下面必须使用render函数
import Vue from 'vue'
// // 这个是配合2，引入完整版的vue(带模板解析功能的vue),但是不建议这么做
// import Vue from 'vue/dist/vue'

//引入App组件,它是所有组件的父组件
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 1.创建Vue的实例对象--vm
new Vue({
  render: h => h(App),    // 这是render函数简写！
  // render(createElement) {
  //   return createElement('h1', '你好呀~~~')
  // },
}).$mount('#app')

// // 2.创建Vue实例对象--vm：也可以写成下面这样:但是相应地,会出问题,解决方式:(1)引入完整版的vue;(2)使用render
// new Vue({
//   el: '#app',
//   template: `<App></App>`,
//   components: {
//     App
//   },
// })
