<template>
  <div class="app">

    <h2> {{ msg }}</h2>
    <School/>
    <Student/>

  </div>
</template>

<script>
  import Student from './components/Student'
  import School from './components/School'

export default {
  name: 'App',
  components: {School, Student},
  data() {
    return {
      msg: '你好呀~~~',
    }
  },

}

</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>