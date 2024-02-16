<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- 使用animate.css第三方库,name和enter-active-class这两个配置项：
      name="animate__animated animate__bounce" 配置是固定的
      enter-active-class="animate__swing" 进入的效果配置"animate__swing"   
      leave-active-class="animate__backOutUp"  离开的效果配置"animate__backOutUp"
      而且两个 h3标签必须配置key
    -->
    <transition-group 
      :appear="true" 
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"   
    >
      <h3 v-show="isShow" key="1">test4:学animate~</h3>
      <h3 v-show="!isShow" key="2">test4:学Vue~~~</h3>
    </transition-group>

  </div>
</template>

<script>
  // 由于这个第三方库是样式(npm install animate.css --save) 保存在node_modules文件中
  // 直接导入即可,不需要 import 'animate.css' from 'address'
  import 'animate.css'

  export default {
    name: 'Test4',
    data() {
      return {
        isShow: true
      }
    },

  }
</script>

<style scoped>
  h3{
    background-color: orange;
  }

</style>