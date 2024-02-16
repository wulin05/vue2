<template>
  <div>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!-- <router-link to="/home/message/detail">{{ msg.title }}></router-link>&nbsp;&nbsp; -->

        <!-- 
          写法一、跳转路由并携带query参数,to的字符串写法：
          1. to的前面加:,表示 ""里面的内容当做js的代码解析,
          2. ""内的``,表示 代码使用了js的模板,js的ES6模板格式是 ${},
          所以:
         -->
        <!-- <router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`">{{ msg.title }}></router-link> -->

        <!--
          写法二、跳转路由并携带query参数,to的对象写法：
         -->
        <router-link :to="{
          path: '/home/message/detail',
          query:{
            id: msg.id,
            title: msg.title,
          }
        }">
          {{ msg.title }}
        </router-link>

      </li>
    </ul>

    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Message',
    // data() {
    //   return {
    //     messageList: [
    //       { id: nanoid(), title: '消息001' },
    //       { id: nanoid(), title: '消息002' },
    //       { id: nanoid(), title: '消息003' }
    //     ],
    //   }
    // },
    computed:{
      ...mapState(['messageList'])
    },
  

}
</script>

<style></style>