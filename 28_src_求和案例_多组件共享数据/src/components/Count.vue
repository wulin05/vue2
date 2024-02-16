<template>
  <div>
    <h2>当前求和为: {{ he }}</h2>

    <h3>当前求和放大10倍为: {{ bigSum }}</h3>

    <h3>我在{{ xuexiao }},学习{{ xueke }}</h3>

    <h3 style="color:red">Person组件的总人数是: {{ personList.length }}</h3>

    <select v-model.number="n">
      <!-- 
        或者通过在value前面加:, 即v-bind:value='1', 让1变成表达式,避免传输的是字符串1的格式 
        即、<option :value="1">1</option> 的方式也能实现传的是数字1,不是字符串1
      -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- 原先不需要参数n, 具体原先去2点查看原因 -->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name:'Count',
    data() {
      return {
        n:1,
      }
    },
    computed:{
      // 借助vuex插件的mapState生成计算属性,从state中读取数据。(对象写法)
      ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject', personList: 'personList'}),

      // 借助mapGetters生成计算属性,从getters(这个getters是在index.js中定义的)中读取数据
      // ...mapGetters({bigSum:'bigSum'})    // 对象写法
      ...mapGetters(['bigSum'])              // 数组写法
    
    },

    methods: {
      // 借助mapMutations可以生成上面的increment、decrement方法： 
      ...mapMutations({increment:'JIA', decrement:'JIAN'}),   // 对象写法
      // ...mapMutations(['JIA', 'JIAN']),   // 数组写法


      // 借助mapActions生成下面的代码：
      ...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'}),    // 对象写法
      // ...mapActions([jiaOdd, jiaWait])    // 对象写法
      
    },
  }
</script>

<style>
  button {
    margin-left: 5px;
  }

</style>

