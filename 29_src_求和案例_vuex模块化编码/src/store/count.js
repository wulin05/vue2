// 1. 求和相关的配置
export default {
  // 4.别忘记这个命名空间,不设置默认是false; 
  namespaced: true,

  actions: {
    jiaOdd(context, value) {
      console.log('actions中的jia被调用了！！！')
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
  },

  mutations: {
    JIA(state, value) {
      console.log('mutations中的"JIA"被执行了！')
      state.sum += value
    },

    JIAN(state, value) {
      state.sum -= value
    },
  },

  state: {
    sum: 0,
    school: '凤山大学',
    subject: '养猪',
  },

  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}