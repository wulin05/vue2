<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- transition：是给Vue在使用动画、过渡的方式添加效果的时候用的标签; appear：元素初始渲染时也应用过渡效果 -->
    <transition :appear="true" name="hello1">
      <h2 v-show="isShow">test2:你好呀~~~</h2>
    </transition>

  </div>
</template>

<script>

  export default {
    name: 'Test2',
    data() {
      return {
        isShow: true
      }
    },

  }
</script>

<style scoped>
  h2{
    background-color: yellow;
    /* transition: 0.7s linear; 
       不写在这个地方,写在下面  进入的过程和离开的过程 样式中
    */ 
  }

  /* 
  注意下面三个样式：
  前一半正好是：进入的起点、过程、终点(从上到下)
  后一半正好是：离开的起点、过程、终点(从下到上)
  */

  /* 进入的起点 , 离开的终点 */
  .hello1-enter, .hello1-leave-to{
    transform: translateX(-100%);
  }

  /* 进入的过程 , 离开的过程 */
  .hello1-enter-active, .hello1-leave-active{
    transition: 0.7s linear;
  }

  /* 进入的终点 , 离开的起点*/
  .hello1-enter-to, .hello1-leave{
    transform: translateX(0px);
  }

</style>