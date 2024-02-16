import Vue from 'vue'
import Vuex from 'vuex'
import { nanoid } from 'nanoid'
import axios from 'axios'

Vue.use(Vuex)

const actions = {

  addPersonServer(context) {
    // axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
    axios.get('http://localhost:8080/atJapan/students').then(
      response => {
        context.commit('ADD_PERSON', response.data)
      },
      error => {
        alert(error.message)
      }
    )
  },

}

const mutations = {

  ADD_PERSON(state, value) {
    value.forEach(item => {
      // 检查是否有重复id
      if (state.personList.some(person => person.id === item.id)) {
        alert(`重复的id: ${item.id}`);
      } else {
        // 如果没有重复的id,则添加到 personList 中
        state.personList.unshift({
          id: item.id,
          name: item.name,
          age: item.age
        })
      }
    })
  },

}

const state = {
  messageList: [
    { id: nanoid(), title: '消息001' },
    { id: nanoid(), title: '消息002' },
    { id: nanoid(), title: '消息003' }
  ],

  personList: [
    { id: nanoid(), name: '张三' },
  ]
}

const getters = {}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})