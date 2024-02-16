<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <h2 v-show="studentName">学生姓名: {{ studentName }}</h2>
  </div>
</template>

<script>
// 先安装消息与订阅的第三方库：npm i pubsub-js, 然后导入
import pubsub from 'pubsub-js'

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
    // this.$bus.$on('hello', (params) => {
    //   console.log('我是School组件,收到了数据', params)
    //   this.studentName = params
    // })

    // 订阅消息: msgName是消息名、data才是接收的数据; 另外订阅有点像定时器,当订阅消息,在vc上就有一个订阅的id
    // 另外,监听函数用回调函数,同样的原因是pubsub是第三方库,Vue不管理该函数的this,所以用箭头函数
    this.pubId = pubsub.subscribe('hello', (msgName,data) => {
      console.log('有人发布了hello消息,hello消息的回调执行了', msgName, data)
      this.studentName = data
    })
  },
  
  beforeDestroy() {
    // 组件School如果要销毁的话,请一定记得要给$bus解绑hello事件。 记住千万不要括号里什么都不写,那就是把$bus的所有事件都解绑了,大条了~~~
    // this.$bus.$off('hello')

    // 在School组件销毁之前取消订阅：必须通过订阅Id来撤销
    pubsub.unsubscribe(this.pubId)
  },
  
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }

</style>