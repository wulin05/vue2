<template>
  <div>
    <h1>人员列表</h1>
    <!-- 如果没有在计算属性computed中去设置sum,或者使用mapState,所以只能老老实实写 $store.state.sum 这么长 -->
    <!-- <h3 style="color:red">Count组件中的sum值为：{{ $store.state.sum }}</h3> -->
    <h3 style="color:red">Count组件中的sum值为：{{ sum }}</h3>

    <h3>列表中第一个人的名字是: {{ firstPersonName }}</h3>

    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addPerson">添加用户</button>
    <button @click="addWang">添加一个姓'王'的人</button>
    <button @click="addStudentsServer">从本地获取学生信息</button>

    <ul v-for="p in personList" :key="p.id">
      <li>{{ p.id.slice(0,5) }} - {{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
  // 为了说明本节内容,完全不使用mapState、mapGetters、mapMutations、mapActions的方式来简写代码
  import {nanoid} from 'nanoid'

  export default {
    name: 'Person',
    data(){
      return {
        name: '',
      }
    },
    computed:{
      personList(){
        // return this.$store.state.personList
        return this.$store.state.personAbout.personList
      },
      sum(){
        // return this.$store.state.sum
        return this.$store.state.countAbout.sum
      },
      firstPersonName(){
        // getters的属性是personAbout/firstPersonName,所以用下面的方式：
        return this.$store.getters['personAbout/firstPersonName']
      }
    }, 

    methods: {
      addPerson(){
        const personObj = { id: nanoid(), name: this.name }
        // this.$store.commit('ADD_PERSON', personObj)
        // ######### 这个地方跟Count.vue里的mapXxxx修改方式不一样,这里是将原先'ADD_PERSON'改成'personAbout/ADD_PERSON'; mapXxxx是在()里,添加'countAbout'或'personAbout'就行。请注意区分!!!
        this.$store.commit('personAbout/ADD_PERSON', personObj)   
        this.name = ''
      },

      addWang(){
        const personObj = {id:nanoid(), name: this.name}
        this.$store.dispatch('personAbout/addPersonWang', personObj)
        this.name = ''
      },

      addStudentsServer(){
        this.$store.dispatch('personAbout/addPersonServer')
      }
      
    },
  }
</script>

<style>

</style>