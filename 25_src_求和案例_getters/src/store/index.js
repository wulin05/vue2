import Vue from 'vue'
import Vuex from 'vuex'
// Vue组件应用Vuex插件
Vue.use(Vuex)

// 2. 准备actions: 做业务逻辑处理(判断、延迟、发送axios请求获取其他信息等等),再commit提交给mutations,由mutations去做具体的计算。
const actions = {
  /* 
   关于actions中jia、jian这两个其实没有必要,因为它们就像服务员,接收从Count.vue的dispatch,但是
   反手就commit转给了后厨mutations,不像jiaOdd和jiaWait,至少有在这里做了一些前置的判断、延迟动作。
   所以,
   可以让Count.vue的关于这两个的dispatch,直接跟后厨联系commit,那么这两个就可以注释掉了
  */
  // jia:function(){}, 但没必要上面那么复杂,简写成：
  // jia(context, value) {
  //   // 官方形参用context(上下文对象), 和value(n的值)
  //   console.log('actions中的jia被调用了', context, value)
  //   context.commit('JIA', value)
  // },

  // jian(context, value) {
  //   context.commit('JIAN', value)
  // },

  // 官方形参用context(上下文对象), 和value(n的值); 
  // 由于上面jia的actions代码不需要了,被注释掉了,关于context的说明也就被注释掉了,这边补一下。
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value) {
    console.log('actions中的jiaWait被调用了！')
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500);
  },

}

// 3. 准备mutations: 用于操作数据,只要前面的actions能commit过来,mutations就两个处理,要么JIA、要么JIAN...
const mutations = {
  JIA(state, value) {
    console.log('mutations中的"JIA"被执行了！')
    // state是sum的值,只是也被封装了(getter、setter); value是n的值
    state.sum += value
  },

  JIAN(state, value) {
    state.sum -= value
  },

}

// 1. 准备state: 用于存储数据; 将原先Count.vue中的sum值,存放到store的state中
const state = {
  sum: 0
}

// ####### 本节getters的内容
// 准备getters: 用于将state中的数据进行加工。 state和getters的关系像极了Vue中的配置项data和computed。
const getters = {
  bigSum(state) {     // getters配置项中默认可以获取到state参数,并且与computed类似,都是需要一个return。
    return state.sum * 10
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  // ##### 定义了getters配置项后,当然要在Store中配置啦
  getters,
})