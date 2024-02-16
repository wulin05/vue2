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
    <!-- 原先不需要参数n, 具体原先去2点查看原因 -->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'
  // ############################################### 1.导入mapMutations
  import {mapMutations} from 'vuex'
  // ############################################### 3.导入mapActions
  import {mapActions} from 'vuex'

  export default {
    name:'Count',
    data() {
      return {
        n:1,
      }
    },
    computed:{
      // 一、靠程序员亲自写计算属性: he、xuexiao、xueke
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
      ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }),

      // 三、借助vuex插件的mapState生成计算属性,从state中读取数据。(数组写法)
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

    methods: {
      // 程序员亲自写的方法：increment、decrement
      // increment(){
      //   // this.$store.dispatch('jia', this.n)
      //   // 通过dispatch先进行actions里的jia处理没什么必要了,从index.js中代码也知道,jia函数处理也只是提交commit给mutations的JIA处理,所以直接让VueComponent通过commit提交给后厨mutations的JIA进行处理
      //   this.$store.commit('JIA', this.n)
      // },
      // decrement(){
      //   // this.$store.dispatch('jian', this.n)
      //   // 同理,jian的actions没有了,vc直接commit给后厨mutations的JIAN处理
      //   this.$store.commit('JIAN', this.n)
      // },

      /*
      ################################################ 2. 借助mapMutations可以生成上面的increment、decrement方法： 
      increment(){this.$store.commit('JIA', this.n)} 和 decrement(){this.$store.commit('JIAN', this.n)}
      increment函数commit到mutations的JIA进行处理; decrement函数commit到mutations的JIAN进行处理!!!
      但是,这里有一个非常重要的知识点,这样写的话,原先插值语法：
       @click="increment"、@click="decrement" 是不需要参数的,因为自己手动写的话,函数体内的是自己确定的this.n；
      
       但是,如果是借助mapMutations来生成的话,系统可不知道,默认是这样的：
       increment(event){
        this.$store.commit('JIA', event)
       }
      看出来区别了么,默认参数是事件对象event,函数体this.$store.commit('JIA',evnet),这个就不对了,应该是n！！！！
      那么,插值语法就要手动给它一个确定的传参(否则就如上面所说的,默认是给事件参数mouseevent),即、
      @click="increment(n)"、@click="decrement(n)"
      */ 
      ...mapMutations({increment:'JIA', decrement:'JIAN'}),   // 对象写法
      /*
       数组写法的话, JIA、JIAN有两个含义：
       （1）代表原先的increment和decrement的函数名,现在是JIA、JIAN,
       （2）store目录的index.js文件中的mutations是处理函数JIA、JIAN; 这样也明确了,数组必须使用'JIA','JIAN',
            所以,数组写法的话,那么上面的@click="increment(n)"、@click="decrement(n)", 同样也是需要明确传入参数是n,不是事件event：
            @click="JIA(n)"、@click="JIAN(n)"
        
       为了留有记录,这边就不使用数组写法了,还是用上面的对象写法
      */
      // ...mapMutations(['JIA', 'JIAN']),   // 数组写法

      
      /*
      ################################################# 4.借助mapActions生成下面的代码：
      */
      // 程序员亲自写的方法：incrementOdd、incrementWait
      // incrementOdd(){
      //   // 把需求通过dispatch提交给actions,让actions去做准备,再给mutations进行逻辑处理
      //   // if(this.$store.state.sum % 2){
      //   //   this.$store.dispatch('jia', this.n)
      //   // }
      //   this.$store.dispatch('jiaOdd', this.n)
      // },
      // incrementWait(){
      //   // 同理需求dispatch给actions,让actions做准备,再给mutations进行逻辑处理
      //   // setTimeout(() => {
      //   //   this.$store.dispatch('jia', this.n)
      //   // }, 500)
      //   this.$store.dispatch('jiaWait', this.n)
      // },

      /*
      同理,  借助mapActions生成对应的incrementOdd和incrementWait方法,必须手动给传参数n,
      @click="incrementOdd(n)、@click="incrementWait(n)
      方法中会调用dispatch去联系actions, 经过actions中判断、或定时器,再通过调用jiaOdd、jiaWait中的commit方法,提交给mutations进行数据的处理(加、减)
      */
      ...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'}),    // 对象写法
      // ...mapActions([jiaOdd, jiaWait])    // 对象写法
      

      /*
      5. 总结： 
        从mapMutations、mapActions看出： 
        （1）mapMutations方法：用于帮助我们生成与mutations对话的方法,即、包含 $store.commit(xxx)的函数
        （2）mapActions方法：用于帮助我们生成与actions对话的方法,即、包含 $store.dispatch(xxx)的函数
        （3）mapActions与mapMutations使用时,若需要传递参数：在模板中绑定事件的时候就应该传递好参数,否则参数是事件对象...
      */
    },
  }
</script>

<style>
  button {
    margin-left: 5px;
  }

</style>

