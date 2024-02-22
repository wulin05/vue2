import Vue from 'vue'
import Vuex from 'vuex'
// Vue组件应用Vuex插件
Vue.use(Vuex)

import { nanoid } from 'nanoid'

const actions = {

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

}

const mutations = {
  JIA(state, value) {
    state.sum += value
  },

  JIAN(state, value) {
    state.sum -= value
  },

  // ############## 在mutations进行personList添加用户的处理
  ADD_PERSON(state, value) {
    state.personList.unshift(value)
  }
}

const state = {
  sum: 0,
  school: '凤山大学',
  subject: '养猪',
  // ##### 本节内容所说的共享数据：person.vue和Count.vue两个组件都要用到personList...
  personList: [
    { id: nanoid(), name: '张三' },
    { id: nanoid(), name: '李四' },
  ]
}

const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})