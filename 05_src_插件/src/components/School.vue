<template>
  <div class="student">
    <h2>学校名称： {{ name | mySlice(1, 5) }}</h2>
    <h2>学校地址： {{ address }}</h2>
    <button @click="testHello">点我测试全局的插件: hello方法</button>
  </div>
</template>

<script>

export default {
  name: 'School',
  data() {
    return {
      name: '凤山fengshandaxue大学',
      address: '福州'
    }
  },
  methods: {
    testHello() {
      this.hello()
    }
  },
}

</script>

<style>
  .student {
    background-color: orange;
  }
</style>