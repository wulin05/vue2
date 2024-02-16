<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 原理同App的路由组件一样 -->
          <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <!-- <a class="list-group-item" href="./home-message.html">Message</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>       
      </ul>
      <!-- 路由器视图：指定组件的呈现位置  -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    
    /*
      用来测试当切换路由的时候,路由组件是被销毁了,以及路由组件home和about
      的vc实例上都多了两个属性：$route,$router; 
      不同路由组件的路由$route不同,所有的路由组件的路由器$router是同一个路由器
    */
    // destroyed() {
    //   console.log('Home组件即将被销毁')
    // },
    // mounted() {
    //   console.log('Home组件挂载完毕了')
    //   window.aboutRoute = this.$route
    //   window.aboutRouter = this.$router
    // },
  }
</script>
