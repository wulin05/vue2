<template>
  <div>
    <!-- 
      记住是从App这边传参数给Student.vue,并且age要使用:, :表示v-bind动态绑定
      如果是age="20"这种写法,就不能被Vue当做后面的"20"是表达式,那么age="20"就是当字符串传给Student组件
      但是如果:age="20",意思就是Vue会将20当做表达式,计算后传给Student组件,所以是数值! 就不是字符串。
     -->
    <Student name="李四" gender="女" :age="20"/>  
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: 'App',
  components: { Student },
}

</script>

<style>

</style>