<template>
    <div class="todo-header">
      <!-- 方式一对应的写法： -->
      <!-- <input type="text" placeholder="请输入你的任务名称,按回车键确认" @keyup.enter="add"/> -->

      <!-- 方式二对应的写法 -->
      <input type="text" placeholder="请输入你的任务名称,按回车键确认" v-model="title" @keyup.enter="add"/>
    </div>
</template>


<script>

import {nanoid} from 'nanoid'

export default {
  name: 'TodoHeader',
  props: ['addTodo'],

  // 这是对应方式二,需要data配置项里的title
  data() {
    return {
      title: ''
    }
  },

  methods: {

    // 方式一：
    // add(e){     //这个e是指: 按回车键确认" @keyup.enter="add" 这个键盘事件的对象
    //   // 将用户的输入包装成一个todo对象：主要获取用户输入值 title：e.target.value, 其他的id和done属性都是配置的
    //   const todoObj = {id:nanoid(), title:e.target.value, done:false}
    //   // 通知App组件去添加一个todo对象
    //   this.addTodo(todoObj)
    //   // 这个就是当按回车确认键后,对这个事件对象的value清空,理解(js学过)：e是事件对象,target是它的属性,属性里的value就是输入框的值,所以对value置为'',其实就是将输入框清空
    //   console.log('9999999999', e)
    //   e.target.value = ''
    // }

    // 方式二：
    // 如果不想在vue里操作上面的dom：e.target.value=''的话,那就要借助v-model了,要对input也要进行相应的修改,并且需要data的配置项
    add(){   // 这边跟方式一就不用获取e这个参数,e就是事件对象
      // 校验数据
      if(!this.title.trim()) return alert('输入不能为空')
      // 将用户的输入包装成一个todo对象：主要获取用户输入值,通过v-model获取用户输入值title,必须是v-model哦,v-bind是单向绑定,即用户输入不会引起data中title值的变化的。
      const todoObj= { id: nanoid(), title: this.title, done: false }
      //通知App组件去添加一个todo对象,这么理解,虽然这个addTodo函数是App组件传过来的,但是子组件调用的话,其实就相当于App组件运行了该函数。
      this.addTodo(todoObj)
      // 清空输入
      this.title = ''
    }
  },

}

// 这里有一个很重要的概念： data、props、methods、computed等等这些都会在vc上,在传递参数(数据、函数)的时候不要重名,否则报错！！！
// 比如、如果App传过来的函数也叫add,而自己本身的methods中的方法也有add,那么就会冲突!!!


</script>


<style scoped>
  /* header */
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus{
    outline: none;
    border-color: rgba(82,168,236,0.8);
    box-shadow:inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(82,168,236,0.6)
  }

</style>