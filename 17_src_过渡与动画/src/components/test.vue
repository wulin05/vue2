<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 3.Vue使用transition包裹内容实现动画效果, 而且这个transition不会出现在html结构中 -->
    <!-- 
      4. 如果给transition设置了name标签属性 <transition name='hello'> , 那么：
       样式名就是: .hello-enter-active{} 、 .hello-leave-active{},
       而不是: .v-enter-active{} 、 .v-leave-active{}
      -->
    <transition :appear="true" name="hello1">
      <h2 v-show="isShow">test:你好呀~~~</h2>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'Test',
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      // showInfo(){
      //   this.isShow = ! this.isShow
      // }
    },
  }
</script>

<style scoped>
  h2{
    background-color: orange;
  }

  /* 
  2. 动画效果的样式类名：
  CSS义了两个动画类 .come 和 .go
  使用了 animation 属性来指定动画效果

  但是如果要在Vue的transition标签中使用的话,就要将.come和.go改成下面的名字(Vue限定的):
  .v-enter-active / .v-leave-active
  */
  .hello1-enter-active{
    animation: atJapan 0.5s linear;
  }

  .hello1-leave-active{
    animation: atJapan 0.5s linear reverse;
  }

  /* 
  1.定义动画：
  @keyframes 规则定义了动画的关键帧，即动画在不同时间点的状态。在下面的代码中，
  atJapan 动画定义了两个关键帧：from 和 to，它们分别表示动画的起始和结束状态。
  */
  @keyframes atJapan {
    from{
      /* transform: translateX(-100px); */
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }

</style>