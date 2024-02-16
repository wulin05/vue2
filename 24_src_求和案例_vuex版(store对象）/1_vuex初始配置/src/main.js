// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

/*
  延伸的知识点: 
  核心点：Vue先把整个文件中的import语句走完了,才会去走其他的代码
  所以, 如果按照编号的顺序写好这些所有配置,控制台会报错,提示要先执行Vue.use(Vuex)！！！
  分析如下：
  虽然编号9的带代码是写在编号2代码之后,但是实际上编号9的代码会在编号2
  代码之前执行,问题就出在这里了:
  由于编号9的代码是想引入store目录的index.js代码执行完后暴露出store对象,但这时候编号2的代码
  Vue.use(Vuex)使用Vuex插件这个代码都没有执行,怎么可能得到index.js的store暴露过来的内容呢！
  解决的思路是: 必须让Vue.use(Vuex)这行代码比编号9的代码要早执行
  所以：
  编号2的代码放在store目录里index.js文件中,这样index.js在暴露store之前肯定已经
  运行走完Vue.use(Vuex)这行代码了。。。
  这时,由于编号2代码不在这里运行了,编号1的代码不用动,它就自己暗淡了(没有被使用),
  那不就是不用引入的意思么。
  这里为了保留痕迹,我不删除,就注释掉编号1、2这两行的代码。

  ！！！那么,总结就是：Vuex插件的使用,引入和使用是在store目录的index.js文件中配置,不是在main.js中配置

  看的时候,按照编号顺序去看,然后对照上面的注释来理解。 最后,我在readme中做正确的思路整理。
  */


// // 1.引入Vuex插件
// import Vuex from 'vuex'
// // 2.使用Vuex插件
// Vue.use(Vuex)

// 9.引入store目录下index.js文件中创建的store对象; 引入的时候,index.js可以不用写,如果文件名不是index.js的话,那就必须写了
import store from './store'


new Vue({
  el: '#app',        //绑定index.html文件中的app容器
  render: h => h(App),
  /*
  3(1).这一步只是为了测试,当1和2步骤完成后,就需要去src目录下创建store目录以及目录下的index.js文件
  引入vuex插件后,再在这里配置store,vm上就有$store选项; 也意味着
  在所有vc实例上都有了$store属性;但是这个明显不是响应式的数据,
  所以,这只是验证使用了vuex插件vm和vc上就有了$store属性,但是不能这么设置
  store: 'linwu',
  */

  //10. 在Vue组件配置store属性
  store,

  beforeCreate() {
    Vue.prototype.$bus = this
  },
})

// 3(2).console.log('Vue的实例对象vm上是否有$store属性:', vm)