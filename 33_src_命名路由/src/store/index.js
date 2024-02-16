import Vue from 'vue'
import Vuex from 'vuex'
import { nanoid } from 'nanoid'

Vue.use(Vuex)

const actions = {}
const mutations = {}
const state = {
  messageList: [
    { id: nanoid(), title: '消息001' },
    { id: nanoid(), title: '消息002' },
    { id: nanoid(), title: '消息003' }
  ],
}
const getters = {}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})