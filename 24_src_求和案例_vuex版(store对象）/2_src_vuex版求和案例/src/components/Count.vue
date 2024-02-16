<template>
  <div>
    <h2>当前求和为: {{ $store.state.sum }}</h2>
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

  export default {
    name:'Count',
    data() {
      return {
        n:1,
      }
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

