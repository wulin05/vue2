<template>
  <div>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!-- <router-link to="/home/message/detail">{{ msg.title }}></router-link>&nbsp;&nbsp; -->

        <!-- 理解性文字、有点重要：
                Message组件使用了v-for指令,生成多个由router-link标签实现到Detail的路由跳转; 但是不管点击哪一个router-link,最终的路由都是一样的：
                path:'/home/message/detail', 所以除了第一次点击任意一个router-link会出现Detail路由组件的挂载,在当前界面下再次点击其他的router-link
                都不会出现Detail路由组件的销毁并再挂载,效果只是router-link中通过query或params的传参, Detail组件保持着,但数据通过传参而变化了。
        -->

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

        <button @click="pushShow(msg)">push查看</button>
        <button @click="replaceShow(msg)">replace查看</button>

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

    methods:{
      ...mapActions({getStudents:'addPersonServer'}),

      pushShow(msg){
        // console.log("@@@@@@@@", this.$router)
        this.$router.push({
          name: 'xiangqing',
          query: {
            id: msg.id,
            title: msg.title,
          }
        })
      },

      replaceShow(msg){
        this.$router.replace({
        name: 'xiangqing',
          query: {
            id: msg.id,
            title: msg.title,
          },
        })
      },
    },

    beforeDestroy() {
      console.log('Message路由组件即将被销毁了~')
    },
      
  }
</script>

<style></style>