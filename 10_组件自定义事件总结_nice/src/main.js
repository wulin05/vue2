import Vue from 'vue'
import App from './App.vue'

// vue.config.productionTip = false

new Vue({
  el: '#app',   //注意这个是绑定到index.html文件中的app容器
  render: h => h(App),

  // // 删除Vue实例(就是vue-tool中的root)
  // mounted() {
  //   // 意味着,刷新页面5秒后,组件以及所有相关的子组件的事件(事件、自定义事件)都销毁了
  //   setTimeout(() => {
  //     this.$destroy()
  //   }, 5000)
  // },

})