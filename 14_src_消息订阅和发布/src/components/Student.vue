<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
// 导入消息订阅与发布的第三方库
import pubsub from 'pubsub-js'

export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      gender: '男',
    }
  },
  mounted() {
    // console.log('Student组件', this.x)
  },
  methods: {
    sendStudentName(){
      // 总线：School组件给事件总线$bus绑定了hello自定义事件,Student组件当然也可以通过总线$bus去触发事件啦....
      // this.$bus.$emit('hello', this.name)
      // 消息的发布
      pubsub.publish('hello', this.name)
    }
  },

}
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>