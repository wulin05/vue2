<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forword">前进</button>
      <button @click="goTest">测试go的功能</button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Banner',

    methods: {
      back(){
        // 后退一步
        this.$router.back()
      },

      forword(){
        // 前进一步
        this.$router.forward()
      },  
      
      goTest(){
        // 往前2步
        this.$router.go(2)
      }
    },
  }
</script>