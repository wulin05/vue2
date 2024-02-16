<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- transition：是给Vue在使用动画、过渡的方式添加效果的时候用的标签; appear：元素初始渲染时也应用过渡效果 -->
    <!-- 
      如果transition包裹多个html元素,如下面有两个h3标签,
      则会报错,报错信息如下：
      1. 必须用transition-group包裹
          <transition> can only be used on a single element. 
          Use <transition-group> for lists.
      2. transition-group里面的每一个包裹项,必须有一个key
          <transition-group> children must be keyed: <h3>
     -->
    <transition-group :appear="true" name="hello1">
      <h3 v-show="isShow" key="1">test3-1:你好呀~~~</h3>
      <h3 v-show="isShow" key="2">test3-1:来学Vue!!!</h3>
    </transition-group>

    <!-- 
      虽然也可以通过下面的方式来实现上面的功能,但是有局限性
     -->
     <transition name="hello1" appear>
      <div v-show="isShow">
        <h3>test3-2:你好呀~~~</h3>
        <h3>test3-2:来学Vue!!!</h3>
      </div>
     </transition>

     <!-- 
      比如,test3-2:你好呀~~~ 和 test3-2:来学Vue!!! 是互斥的, 两个h1是不能同时出现
      那就不能放在一个div里了,就还是老老实实用transition-group啦
      -->
      <transition-group :appear="true" name="hello1">
        <h3 v-show="isShow" key="1">test3-3:你好呀~~~</h3>
        <h3 v-show="!isShow" key="2">test3-3:来学Vue!!!</h3>
      </transition-group>


  </div>
</template>

<script>

  export default {
    name: 'Test3',
    data() {
      return {
        isShow: true
      }
    },

  }
</script>

<style scoped>
  h3{
    background-color: skyblue;
    /* transition: 0.9s linear; */
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
    transition: 0.9s linear;
  }

  /* 进入的终点 , 离开的起点*/
  .hello1-enter-to, .hello1-leave{
    transform: translateX(0px);
  }

</style>