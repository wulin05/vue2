<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
  import Count from './components/Count'
  import Person from './components/person'
  export default {
    name: 'App',
    components: {Count, Person},
  }
</script>

<style>

</style>