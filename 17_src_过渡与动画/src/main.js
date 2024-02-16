import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  },
  //  简写：
  //  render: (h) => h(App)
})