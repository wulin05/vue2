import Vue from 'vue'
import Vuex from 'vuex'
// Vue组件应用Vuex插件
Vue.use(Vuex)

// // 1. 求和相关的配置   ---> 配置写到count.js文件中, 所以这边注释掉,为了留痕迹。。。
// const countOptions = {
//   // 4.别忘记这个命名空间,不设置默认是false;
//   namespaced: true,

//   actions: {
//     jiaOdd(context, value) {
//       console.log('actions中的jia被调用了！！！')
//       if (context.state.sum % 2) {
//         context.commit('JIA', value)
//       }
//     },
//     jiaWait(context, value) {
//       console.log('actions中的jiaWait被调用了！')
//       setTimeout(() => {
//         context.commit('JIA', value)
//       }, 500);
//     },
//   },

//   mutations: {
//     JIA(state, value) {
//       console.log('mutations中的"JIA"被执行了！')
//       state.sum += value
//     },

//     JIAN(state, value) {
//       state.sum -= value
//     },
//   },

//   state: {
//     sum: 0,
//     school: '凤山大学',
//     subject: '养猪',
//   },

//   getters: {
//     bigSum(state) {
//       return state.sum * 10
//     }
//   }
// }

// // 2. 人员管理相关的配置   ---->同样,配置写到person.js文件中,所以这边注释掉.
// const personOptions = {
//   namespaced: true,

//   actions: {
//     // 添加用户的姓必须为：王 ....
//     addPersonWang(context, value) {
//       if (value.name.indexOf('王') === 0) {
//         context.commit('ADD_PERSON', value)
//       } else {
//         alert('添加的人必须姓"王"!')
//       }
//     }
//   },

//   mutations: {
//     ADD_PERSON(state, value) {
//       state.personList.unshift(value)
//     },
//   },

//   state: {
//     personList: [
//       { id: nanoid(), name: '张三' },
//       { id: nanoid(), name: '李四' },
//     ]
//   },

//   getters: {
//     // 获取personList数组中第一个元素的name
//     firstPersonName(state) {
//       return state.personList[0].name
//     }
//   }
// }

// 由于1、2 各自写到count.js和person.js文件中,这边需要引入：
import countOptions from './count'
import personOptions from './person'

// 创建并暴露store
export default new Vuex.Store({
  // 模块化：modules
  modules: {
    // 3. 注意,这个设置意味着countAbout对应countOptions, personAbout对应personOptions; 在Count.vue和Person.vue中用来明确是 求和相关的、还是人员管理相关的!!!
    countAbout: countOptions,    // 分类：countAbout,其实可以相同,这样可以触发简写方式。但是这边为了以后回看,特地不命名一样,以示区别。
    personAbout: personOptions   // 分类：personAbout, 同上
  }
})