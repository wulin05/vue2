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
          // path: '/home/message/detail',   // 不管用path,还是下面的路由命名都是可以的
          name: 'xiangqing',
          query:{
            id: msg.id,
            title: msg.title,
          }
        }">
          {{ msg.title }}
        </router-link>

        <!--
          写法三、跳转路由并携带params参数,to的字符串写法：
        -->
        <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{ msg.title }}></router-link> -->

        <!--
          写法四、跳转路由并携带params参数,to的对象写法：
        -->
          <!-- <router-link :to="{
             // path: '/home/message/detail',   // 这里使用params参数的to的对象写法,不允许使用path,只能用命名路由 name:'xiangqing'
            name: 'xiangqing',
            params: {
              id: msg.id,
              title: msg.title,
            }
          }">
            {{ msg.title }}
          </router-link> -->
      </li>
    </ul>
    <router-view></router-view>
    <hr>

    <button @click="getStudents">获取本地server1的学生数据</button>
    <ul v-for="p in personList" :key="p.id">
      <li>{{ p.id.slice(0, 5) }} - {{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

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
      ...mapState(['messageList', 'personList'])
    },

    methods: {
      ...mapActions({getStudents:'addPersonServer'})
    },
  

}
</script>

<style></style>