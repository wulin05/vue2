<template>
  <ul>
    <li :style="{ opacity, fontSize:'18px', fontWeight:'bolder' }">欢迎学习vue2.0</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        opacity: 1,        
      }
    },

    /*
      这里是为了说明,由于在home.vue中给路由视图配置了<keep-alive include="News">,避免了News组件在切换路由的时候被销毁,
      同样由于切换News路由不会销毁News组件,导致beforDestroy声明周期钩子不会被执行,意味着,即使切换到其他路由,News组件中的
      定时器依旧在执行,这个就很没有效率; 但是又不能不用<keep-alive include="News">,因为需要News路由组件缓存,所以： 
      引入了其它的生命周期钩子: activated、deactivated , 这两个生命周期钩子是路由组件“独有”的,它们俩为一组相关的生命周期钩子。       
    */
    // mounted() {
    //   this.timerId = setInterval(() => {
    //     console.log('News路由组件被挂载了')
    //     this.opacity -= 0.01
    //     if(this.opacity <=0) this.opacity = 1
    //   },16)
    // },

    // // 这里使用beforeDestroy生命周期钩子,只是为了验证<keep-alive include="News">会让切换News路由的时候,不会销毁News组件,也就不会执行beforeDestroy生命周期钩子
    // beforeDestroy() {
    //   console.log('News组件即将被销毁了~')
    //   clearInterval(this.timerId)
    // },

    // activated、deactivated 生命周期钩子
    activated() {
      this.timerId = setInterval(() => {
      console.log('News路由组件激活了')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
    },

    deactivated() {
      console.log('News路由组件失活了')
      clearInterval(this.timerId)
    },

  }
</script>

<style>

</style>