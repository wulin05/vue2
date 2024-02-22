<template>
  <div>
    <h1>人员列表</h1>
    <!-- 如果没有在计算属性computed中去设置sum,或者使用mapState,所以只能老老实实写 $store.state.sum 这么长 -->
    <!-- <h3 style="color:red">Count组件中的sum值为：{{ $store.state.sum }}</h3> -->
    <h3 style="color:red">Count组件中的sum值为：{{ sum }}</h3>

    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addPerson">添加用户</button>
    <ul v-for="p in personList" :key="p.id">
      <li>{{ p.id.slice(0,5) }} - {{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
  // person组件故意不使用mapState、mapGetters、mapMutations、mapActions的方式来简写代码,与Count.vue对比..
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
        return this.$store.state.personList
      },
      sum(){
        return this.$store.state.sum
      }
    }, 

    methods: {
      addPerson(){
        const personObj = { id: nanoid(), name: this.name }
        // 由于不需要使用dispatch到actions中进行处理,那么就直接commit提交给mutations。
        this.$store.commit('ADD_PERSON', personObj)
        this.name = ''
      }
      
    },
  }
</script>

<style>

</style>