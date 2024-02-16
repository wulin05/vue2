import Vue from 'vue'
import App from './App.vue'

// vue.config.productionTip = false

/*
Vue.prototype.x = { a: 100, b: 200 }
这行的意思是在Vue的原型对象上添加事件总线是最好的方式,记得那个图么~~~~
满足条件一：所有的vc都能看到这个x
但是不满足条件二：x上没有没有$on、$off、$emit等等方法,比如在School组件：
    // 报错,因为x格式就不对,没有$on、$off、$emit等等方法
    this.x.$on('kickLinwu', (data) => {
      console.log('我是School组件,收到了数据', data) 
    }),
Vue的原型对象prototype、以及vm、vc上才有$on $off $emit等等

所以：
Vue.prototype.x = Vue.extend(options)
可以简写为： Vue.prototype.x = options
即：

Vue.prototype.x = {
  name:'',    // 命名组件(在Vue工具上显示)
  template: ``,
  data(){
    return ....
  },
  components: { .., ..}
  props:[.., ..] 或 {name: String,....} 或 {name:{type: String,required: true,default:'张三'}}
  methods:{},
  computed:{},
  watch:{},
  mixins: [hunhe2]      // 混入
  directives:{}         // 自定义指令
  filters:{}            // 过滤器
}

结果：
const Demo = Vue.extend({})
const d = new Demo()
这样就创建了一个Vue构造函数创建的VueComponent的实例对象vc,vc上面就有$on $off $emit等等
然后赋值给：
Vue.prototype.x = d
这样Vue的原型对象的x就是vc,自然就有了$on $off $emit等等
然后赋值给：但是写的还是麻烦

const Demo = Vue.extend({})
const d = new Demo()
Vue.prototype.x = d
*/


new Vue({
  el: '#app',   //注意这个是绑定到index.html文件中的app容器
  render: h => h(App),

  // 安装全局事件总线(Good)：就利用vm的beforeCreate的生命周期,没必要再new一个vc了
  beforeCreate() {
    Vue.prototype.$bus = this
  },

})