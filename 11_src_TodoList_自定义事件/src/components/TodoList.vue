<template>
  <ul class="todo-main">
    <!-- :todo="todoObj" 的意思从App组件传递过来,使用props接收的值todos进行遍历,
      使用todo将值(todoObj)又传递给子组件TodoItem,TodoItem也使用props接收todo这个参数值 
      checkTodo和deleteTodo这两个函数,是父组件TodoList作为桥梁,将爷组件App通过props传给孙组件TodoItem。
      -->
    <TodoItem 
    v-for="todoObj in todos" 
    :key="todoObj.id" 
    :todo="todoObj"
    :checkTodo="checkTodo"
    :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  components: { TodoItem },
  props:['todos', 'checkTodo', 'deleteTodo']
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
</style>