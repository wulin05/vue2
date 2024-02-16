<template>
  <div>
    <Test/>
    <Test2/>
    <Test3/>
    <Test4/>
  </div>
</template>

<script>
  import Test from './components/test.vue'
  import Test2 from './components/test2.vue'
  import Test3 from './components/test3.vue'
  import Test4 from './components/test4.vue'
  
  export default {
    name: 'App',
    components: { Test, Test2, Test3, Test4 },

  }
</script>

<style>

</style>