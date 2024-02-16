<template>
  <div class="student">
    <h2 @click="showName">学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
  </div>
</template>

<script>
// 同理引入mixin混合: 
// 注意: 这种方式是 局部混合！！！！在main.js中可以配置全局混合
import {hunhe2} from '../mixin'

export default {
  name: 'School',
  data() {
    return {
      name: '凤山大学',
      address: '福州'
    }
  },
  mixins: [hunhe2]   //就算只有一个混合,也必须写在数组里
}

</script>

<style>
  .student {
    background-color: orange;
  }
</style>