<template>
<!--  组件的交互-->
   <div>
     <h2>学生姓名:{{ name }}</h2>
     <h2>学生年龄:{{ age }}</h2>
     <button @click="showName">点我提示学生姓名</button>
   </div>
</template>

<!--<style>-->
<!--  /*css样式*/-->
<!--  .demo{-->
<!--    background: skyblue;-->
<!--  }-->
<!--</style>-->


<script>
  //组件交互的代码
  //export default school //分别暴露
  export default {
    // 如果没有下面这行eslint.....的话,老是什么说name:'Student'必须用双节的命名MyStudent。
    // eslint-disable-next-line  
    name: 'Student', //开发者工具最终呈现的名字为School
    data(){
      return {
        name:'panyue',
        age:21
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
