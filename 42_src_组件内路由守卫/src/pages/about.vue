<template>
  <div>
    <h2>About组件内容</h2>
  </div>
</template>

<script>
  export default {
    name: 'About',

    /*
      ############################ 本节内容：组件内路由守卫
      4.组件内路由守卫：通过路由进入该组件时、以及离开该组件时再写一些逻辑,比如进入时的鉴权、离开时console.log

      注意和前面的 1.全局路由守卫：前置全局路由守卫、后置全局路由守卫  2. 独享路由守卫的区别
      组件内路由守卫必须是通过路由规则...
      好好理解 "必须通过路由规则" 这个含义~~~~~
      比如：在App组件中,把About通过<About/>这种一般组件的方式,显示到页面上（而不是之前那样通过路由组件的方式）,
            那么下面的 beforeRouteEnter 是不会被调用的,即控制台不会执行打印出下面的信息：
            console.log('About---beforeRouteEnter的to、from:', to, from)

      但我感觉视频里这样举例有问题,如果都用一般组件的方式,就直接显示到页面了,本没有所谓的路由规则,
      那下面的API:beforeRouteEnter根本就不会被调用....
      其他的全局路由守卫、独享路由守卫不都一样么,由路由组件变成一般组件的使用方式,本就没有路由规则的概念,
      也就不会去router目录的index.js中去匹配路由条目,当然就不会调用beforeEach/afterEach、beforeEnter的API啦...
    */
    // 通过路由规则,进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log('About---beforeRouteEnter的to、from:', to, from)
      if (to.meta.isAuth) {
        if (localStorage.getItem('about') === 'about') {
          next()
        } else {
          alert('About页面使用组件内路由守卫: 值为about才有权限查看...')
        }
      } else {
        next()
      }
    },

    // 通过路由规则,离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log('About---beforeRouteLeave的to、from', to, from)
      next()
    }
  }
</script>
