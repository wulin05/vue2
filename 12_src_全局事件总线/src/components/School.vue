<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <h2 v-show="studentName">学生姓名: {{ studentName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '凤山大学',
      address: '城头',
      studentName: '',
    }
  },

  mounted() {
    // 给$bus总线绑定自定义事件 hello,以及回调的箭头函数
    this.$bus.$on('hello', (params) => {
      console.log('我是School组件,收到了数据', params)
      this.studentName = params
    })
  },
  
  beforeDestroy() {
    // 组件School如果要销毁的话,请一定记得要给$bus解绑hello事件。 记住千万不要括号里什么都不写,那就是把$bus的所有事件都解绑了,大条了~~~
    this.$bus.$off('hello')
  },
  
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }

</style>