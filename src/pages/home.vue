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
      <!-- 路由器视图：指定组件的呈现位置  class="router-view-container"是我为了调整上下间距后续添加的类名 -->
      <!-- 
           缓存路由组件：让不展示的路由组件保持挂载,不被销毁
           keep-alive标签是指定该标签内的所有路由器视图具有路由缓存, include='News'表示New路由组件名具有路由缓存,其它路由组件,例如、Message路由组件不具有路由缓存。
           原理是：keepalive标签可以使News路由组件在被切换路由时,不被销毁,所以News组件有缓存; 而Message路由会被销毁,缓存就没有了。

           缓存多个路由组件: <keep-alive :include="['News', 'Message']"> 注意include前面有冒号:
      -->
      <keep-alive include="News">
        <router-view class="router-view-container"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  
    /*
    重点：
      1. 用来测试当切换路由的时候,原路由组件是被销毁了,新路由组件被挂载,
      2. 路由组件home和about的vc实例上都多了两个属性：$route,$router; 
      3. 不同路由组件的路由$route不同,所有的路由组件的路由器$router是同一个路由器
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

<style>
  .router-view-container{
    margin-top: 20px;
  }
</style>