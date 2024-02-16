<template>
  <div>
    <h2>当前求和为: {{ sum }}</h2>

    <h3>当前求和放大10倍为: {{ bigSum }}</h3>

    <h3>我在{{ school }},学习{{ subject }}</h3>

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
      /*
        借助vuex插件的mapState生成计算属性,从state中读取数据。(对象写法)
        ...mapState({ sum: 'sum', school: 'school', subject: 'subject', personList: 'personList'}), 并且不能想当然觉得可以用对象简写的方式!!!!!!  

        ######### sum、school、subject是countOptions分类中的,因为index.js的暴露中,已经模块化 modules：{ countAbout: countOptions, personAbout: personOptions }
        所以, 前面必须用模块名'countAbout'指定; 并且如果想要这样写法,必须在index.js中的配置分类项中,得添加namespaced: true,这个属性。不然报错...
        ...mapState('countAbout',['sum', 'school', 'subject']),
        ...mapState('personAbout', ['personList']),
       
        其实最初是这样的：
        ...mapState(['countAbout', 'personAbout']); 这样写那么
        上面的插值语法中得稍微麻烦点,比如：{{ countAbout.sum }} 、{{ countAbout.school }}..., 这样的话,可以不用给index.js中的配置分类项添加namespaced：true这个属性。
        也就是说分类配置项中的 namespaced：true , 不是必须的。 是因为使用了下面的方式,才导致必须要加namespaced: true这个属性。

      */
      ...mapState('countAbout',['sum', 'school', 'subject']),
      // ######### 同理如上, personList是在 personOptions 这个配置项中的, 而 personOptions 这个配置项被模块化了,模块名是 personAbout, 所以,使用的是personAbout模块名。
      ...mapState('personAbout', ['personList']),

      // 借助mapGetters生成计算属性,从getters(这个getters是在index.js中定义的)中读取数据
      // ...mapGetters({bigSum:'bigSum'})                 // 对象写法
      ...mapGetters('countAbout',['bigSum'])              // 数组写法
    
    },

    methods: {
      // 借助mapMutations可以生成上面的increment、decrement方法： 
      // ######## 同样需要明确mapMutations是对应countAbout分类里的, increment:'JIA'和decrement:'JIAN'
      ...mapMutations('countAbout',{increment:'JIA', decrement:'JIAN'}),   // 对象写法
      // ...mapMutations(['JIA', 'JIAN']),   // 数组写法, 主要是 用了数组写法,函数名和index.js中的mutations的函数名都要一样...这个修改了,后续再看怕不好理解。


      // 借助mapActions生成下面的代码：
      // ######## 同样需要明确mapActions是对应countAbout分类里的, incrementOdd:'jiaOdd'和incrementWait:'jiaWait'
      ...mapActions('countAbout',{incrementOdd:'jiaOdd', incrementWait:'jiaWait'}),    // 对象写法
      // ...mapActions([jiaOdd, jiaWait])    // 数组写法
      
    },
  }
</script>

<style>
  button {
    margin-left: 5px;
  }

</style>

