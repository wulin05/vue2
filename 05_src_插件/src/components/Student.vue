<template>
  <div class="student">
    <h2>学生姓名： {{ name }}</h2>
    <h2>学生性别： {{ gender }}</h2>
    <!-- 测试插件的功能是否能用 -->
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script> 

export default {
  name: 'Student',
  data() {
    return {
      name: '渣男',
      gender: '男',
    }
  }

}

</script>

<style>
  .student {
    background-color: orange;
  }
</style>