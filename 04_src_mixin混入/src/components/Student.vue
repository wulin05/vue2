<template>
  <div class="student">
    <h2 @click="showName">学生姓名： {{ name }}</h2>
    <h2>学生性别： {{ gender }}</h2>
  </div>
</template>

<script>

// 引入mixin混合: 由于mixin.js是使用分别暴露,所以得用{},并且暴露名是hunhe,所以是{hunhe}
// 注意: 这种方式是 局部混合！！！！ 在main.js中可以配置全局混合
import {hunhe1, hunhe2} from '../mixin'   

export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      gender: '男',
      x:999   // mixin.js中有x,那么以data中为准
    }
  },
  mixins: [ hunhe1,hunhe2 ],  //就算只有一个混合,也必须写在数组里

  mounted() {    // 当混合文件(mixin.js)和本文件都有生命周期函数,那么不影响,都输出
    console.log('我是Student.vue里的"你好呀！！！！！"')
  },

}

</script>

<style>
  .student {
    background-color: orange;
  }
</style>