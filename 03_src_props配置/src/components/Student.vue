<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>学生姓名： {{ name }}</h2>
    <h2>学生性别： {{ gender }}</h2>
    
    <h2>学生年龄(从props的age获取): {{ age+1 }}</h2>
    <h2>修改学生年龄(从data的myAge获取): {{ myAge }}</h2>
    <button @click="updatemyAge">尝试修改收到的数据(年龄)</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    console.log(this)
    return {
      msg:'大家来学Vue~~~',
      // name: '张三'  这个地方不能再声明与props一样的变量名了,会打架
      myAge: this.age   // 将props的age数据复制到data中,然后通过methods配置项的updatemyAge函数去修改age数据
    }
  },
  methods: {
    updatemyAge(){
      this.myAge++  
      //从这个也可以看出props的优先级更高,props获取到age,然后修改成99,然后data中的myAge: this.age,这样才实现通过myAge间接对传入参数的修改
    }
  },

  //props这边来接收App传送过来的参数(无法修改), 接收的第一种方式：简单声明接收
  // props: ['name', 'gender', 'age']

  // 第二种方式: 接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   gender: String,
  //   age: Number,
  // }

  // 第三种方式: 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String,  //name的类型是字符串
      required: true  // name是必须的
    },
    gender: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 99    // 如果age没有传过来参数,那么默认值为: 99
    }
  }
}

</script>

<style>
  .student {
    background-color: orange;
  }
</style>