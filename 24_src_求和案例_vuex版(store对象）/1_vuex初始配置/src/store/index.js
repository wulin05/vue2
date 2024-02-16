// 该文件用于创建Vuex中最为核心的store

// 4.引入Vuex插件
import Vuex from 'vuex'

// 11.引入Vue
import Vue from 'vue'

/* 
  2.使用Vuex插件
    ====> 这个是从main.js分析后,改写到这里的;
    那么,就必须在这个文件里引入Vue组件了,
    不然没有Vue,哪里来的Vue.use呢! 所以编号11我写到上面了。
*/
Vue.use(Vuex)

// 5.准备store的配置项
// 准备actions: 用于相应组件中的动作
const actions = {}
// 准备mutations: 用于操作数据(其实就是state)
const mutations = {}
// 准备state: 用于存储数据
const state = {}

/*
6.创建store,需要通过Vuex身上的Store构造函数创建store对象: $store
const store = new Vuex.Store({
  actions,      // actions: actions 触发对象的简写形式
  mutations,
  state
})

7.默认暴露store
export default store
*/
// 6、7最终简写为,创建并暴露store对象: 
export default new Vuex.Store({
  actions,
  mutations,
  state,
})

// 8.最终要把创建并暴露的store对象,要到main.js中去引入(其实就是最终main.js要得到store的配置)