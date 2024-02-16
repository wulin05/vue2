<template>
  <div>
    <h2>当前求和为: {{ he }}</h2>
    <!-- 
      可以这么写,但是如果这个需求是很多组件都要用到,而且如果逻辑比放大10倍复杂,
      难道每个组件中都用插值语法去写这个逻辑么?不现实,分析如下：
      1. 很多组件要用到
      2. 逻辑稍微复杂,并且固定的
      3. 可能有的人第一想法是用计算属性computed,但是排除掉,因为计算属性只能在当前组件中有效,
         跨组件就不能用了, 不满足1的需求了。
      
         所以,这时候就要用到store中的getters这个属性了
    -->
    <!-- <h3>当前求和放大10倍为: {{ $store.state.sum*10 }}</h3> -->
    <h3>当前求和放大10倍为: {{ bigSum }}</h3>
    <!-- 在store目录的index.js配置了getters项(state就像Vue的配置项data, getters就像Vue的配置项computed), 
         所以,就可以通过 $store.getters.bigSum找到这个值啦(可以把getters想象成store中的state的计算属性)
    -->
    <h3>我在{{ xuexiao }},学习{{ xueke }}</h3>

    <select v-model.number="n">
      <!-- 
        或者通过在value前面加:, 即v-bind:value='1', 让1变成表达式,避免传输的是字符串1的格式 
        即、<option :value="1">1</option> 的方式也能实现传的是数字1,不是字符串1
      -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    name:'Count',
    data() {
      return {
        n:1,
      }
    },
    computed:{
      // 一、靠程序员自己亲自去写计算属性: he、xuexiao、xueke
      // he(){
      //   return this.$store.state.sum
      // },
      // xuexiao(){
      //   return this.$store.state.school
      // },
      // xueke(){
      //   return this.$store.state.subject
      // },
      
      // 二、借助vuex插件的mapState生成计算属性,从state中读取数据。(对象写法)
      /*
        下面这么写会报错,下面的结果是对象,由于computed就是对象了,对象里面再对象,就会报错：
        mapState({ he:'sum', xuexiao:'school', xueke:'subject'})

        应该这么写(ES6写法),就是将mapState对象摊开,对象里的每一个键值对是：he:function 作为computed的属性：
        ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }),

        另外,就算 he改成sum, xuexiao改成school,xueke改成subject,也不能用对象的简写方式哦,如下: 
        ...mapState({ sum, school, subject })
        
        因为,简写的原型是：
        ...mapState({ sum:sum, school:school, subject:subject })
        前面的sum表示通过mapState生成的计算属性sum,后面的sum是对应$store.state中的sum的值
        所以,后面的sum如果不用''括起来,就代表了变量,mapState就会去读取代码中定义的sum变量的值,但,
        本代码中根本没有定义sum这个变量,sum只是指代了 $store.state.sum 这个sum的值!!! 好好体会~~~
      */ 
      ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }),

      // 三、借助mapState生成计算属性,从state中读取数据。(数组写法)
      // 这种写法,就要把插值语法中的就改为 sum、school、subject。用he、xuexiao、xueke只是为了说明上面的对象写法,所以用数组写法明显简洁。
      // ...mapState(['sum', 'school','subject']),

      /* ******************************************************************** */
      // bigSum(){
      //   return this.$store.getters.bigSum
      // },

      /*
      四、借助mapGetters生成计算属性,从getters(这个getters是在index.js中定义的)中读取数据
          同理要借助vuex插件的mapGetters方法,首先从vuex中导入啦~~~
      */
      // ...mapGetters({bigSum:'bigSum'})    // 对象写法
      ...mapGetters(['bigSum'])              // 数组写法
    
    },

    mounted() {
      // 这个只是为了验证mapState方法得到的是对象,对象里是{属性1：函数1, 属性2：函数2, ... }
      const x = mapState({he:'sum', xuexiao:'school',xueke:'subject'})
      console.log('@@@@@@@@@@', x)    // x的结果是{he:function, xuexiao:function,xueke:function}
    },

    methods: {
      increment(){
        // this.$store.dispatch('jia', this.n)
        // jia的actions没什么必要了,VueComponent通过commit直接提交给后厨mutations的JIA进行处理
        this.$store.commit('JIA', this.n)
      },
      decrement(){
        // this.$store.dispatch('jian', this.n)
        // 同理,jian的actions没有了,vc直接commit给后厨mutations的JIAN处理
        this.$store.commit('JIAN', this.n)
      },
      incrementOdd(){
        // 把需求通过dispatch提交给actions,让actions去做准备,再给mutations进行逻辑处理
        // if(this.$store.state.sum % 2){
        //   this.$store.dispatch('jia', this.n)
        // }
        this.$store.dispatch('jiaOdd', this.n)
      },
      incrementWait(){
        // 同理需求dispatch给actions,让actions做准备,再给mutations进行逻辑处理
        // setTimeout(() => {
        //   this.$store.dispatch('jia', this.n)
        // }, 500)
        this.$store.dispatch('jiaWait', this.n)
      },
    },
  }
</script>

<style>
  button {
    margin-left: 5px;
  }

</style>

