<template>
<ul>
  <li>消息编号: {{ $route.query.id }}</li>
  <li>消息标题: {{ $route.query.title }}</li>
  <!-- <li>消息编号: {{ $route.params.id }}</li> -->
  <!-- <li>消息标题: {{ $route.params.title }}</li> -->
</ul>
</template>

<script>
  export default {
    name: 'Detail',

    /*
    路由转换是对路由组件的销毁和挂载,所以每次只要点击Message路由组件,就会挂载Message组件。
    当第一次点击Message组件里的Detail子路由内容时(比如：点击"消息001"),就会跳转路由,跳转路由其实也就是挂载Detail路由组件,
    同时会将本节说的query参数连同给到Detail组件,这时候下面的console.log就能打印出"消息001"传过来的参数了;
    但是这时候再点击其他内容(比如：点击"消息002"或"消息003"),由于路径都是：
    path: '/home/message/detail',并没有跳转路由, 只是传递不同的参数,
    所以,不会引起Detail路由组件的重新挂载, 那么控制台当然不会console.log打印出信息啦
    但是,页面是没问题的,会跟随着参数的变化而显示不同的内容
    */
    mounted() {
      console.log(this.$route)
    },

  }
</script>
