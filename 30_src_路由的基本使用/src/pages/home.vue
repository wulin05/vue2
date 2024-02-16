<template>
  <h2>我是Home的内容</h2>
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
