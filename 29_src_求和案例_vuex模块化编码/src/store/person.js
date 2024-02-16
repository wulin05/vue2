// 人员管理相关的配置
import { nanoid } from 'nanoid'
import axios from 'axios'

export default {
  namespaced: true,

  actions: {
    // 添加用户的姓必须为：王 ....
    addPersonWang(context, value) {
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value)
      } else {
        alert('添加的人必须姓"王"!')
      }
    },
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
    }
  },

  // mutations: {
  //   ADD_PERSON(state, value) {
  //     state.personList.unshift(value)
  //   },
  // },
  mutations: {
    ADD_PERSON(state, value) {
      value.forEach(item => {
        state.personList.unshift({
          id: item.id,
          name: item.name,
          age: item.age
        })
      })
    },
  },

  state: {
    personList: [
      { id: nanoid(), name: '张三' },
      { id: nanoid(), name: '李四' },
    ]
  },

  getters: {
    // 获取personList数组中第一个元素的name
    firstPersonName(state) {
      return state.personList[0].name
    }
  }
}