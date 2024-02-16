<template>
<!--  组件的交互-->
   <div class="demo">
     <h2>学校名称:{{ name }}</h2>
     <h2>学校地址:{{ address }}</h2>
     <button @click="showName">点我提示学校名</button>
   </div>
</template>

<style>
  /*css样式*/
  .demo{
    background: skyblue;
  }
</style>


<script>
  //组件交互的代码
  //export school  //分别暴露
  export default {
    // eslint-disable-next-line
    name: 'School', //开发者工具最终呈现的名字为School
    data(){
      return {
        name:'武汉科技大学',
        address: '武汉'
      }
    },
    methods:{
      showName(){
        alert(this.name);
      }
    }
  };

  // export { school }     //统一暴露
  // export default school //默认暴露
</script>
