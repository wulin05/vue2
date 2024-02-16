<template>
  <ul class="todo-main">
    <!-- ####################
         本节是关于动画、过渡效果.....
         由于<TodoItem/>是根据v-for遍历数组的条数生成有多少个,所以这边不像在
         TodoItem组件使用transiton, 这里要使用transition-group ！！！并且,
         组件标签或html元素标签中必须要有key,刚好这边因为v-for,必须带key,所以刚好不用再写了。
    -->
    <transition-group appear name="todo">
      <!-- :todo="todoObj" 的意思从App组件传递过来,使用props接收的值todos进行遍历,
      使用todo将值(todoObj)又传递给子组件TodoItem,TodoItem也使用props接收todo这个参数值 
      checkTodo和deleteTodo这两个函数,是父组件TodoList作为桥梁,将爷组件App通过props传给孙组件TodoItem。
      -->
      <TodoItem 
      v-for="todoObj in todos" 
      :key="todoObj.id" 
      :todo="todoObj"
      />
    </transition-group>
  </ul>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  components: { TodoItem },
  props:['todos']
}
</script>

<style scoped>
 /*main */
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

  /* 1.定义动画： */
  @keyframes atJapan {
    from{
      /* transform: translateX(-100px); */
      transform: translateX(100%);
    }
    to{
      transform: translateX(0px);
    }
  }

  /* 
  2. 动画效果的样式类名：注意类名的第一个单词todo是根据transition中的name="todo"
     如果没有设置name,那默认是v-enter-active
  */
  .todo-enter-active{
    animation: atJapan 0.5s linear;
  }

  .todo-leave-active{
    animation: atJapan 0.5s linear reverse;
  }

</style>