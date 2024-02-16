<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 父亲App组件将addTodo函数传给了儿子TodoHeader组件,这样儿子调用这个函数,父亲也能得到数据 -->
        <TodoHeader :addTodo="addTodo"/>
        <TodoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <TodoFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  name: 'App',
  components: { TodoHeader, TodoList, TodoFooter },
  data() {
    return {
      todos: [
        { id: '001', title: '抽烟', done: true },
        { id: '002', title: '喝酒', done: false },
        { id: '003', title: '开车', done: true }
      ]
    }
  },
  methods: {
    //子组件TodoHeader 添加一个todo
    addTodo(todoObj){
      // console.log('我是App组件,我收到了儿子(TodoHeader)的数据', todoObj)
      this.todos.unshift(todoObj)
    },

    //孙组件TodoItem 勾选or取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo) => {
        if(todo.id===id) todo.done = !todo.done
      })
    },

    // 孙组件TodoItem 删除一个todo
    deleteTodo(id){
      // 注意,filter是生成新数组,所以需要将过滤得到的新数组重新赋值给原数组
      // this.todos = this.todos.filter((todo) => {
      //   return todo.id !== id
      // })
      // 上面的可以简写成下面这行代码：  
      this.todos = this.todos.filter( todo => todo.id !== id )
    },

    // 子组件TodoFooter中的单选框：全选or取消全选
    checkAllTodo(done){
      // 遍历的时候,让每一个数组对象done的done值都由传入参数的done来决定
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },

    // 子组件TodoFooter中的单选框： 清除已完成的任务
    clearAllTodo(){
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }

  },


}

/*
说下Array.prototype.filter()的理解：

函数的作用可以理解为过滤条件, 比如下面的例子：
function isBigEnough(value) {
  return value >= 10;
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

简写起来就是：
[12, 5, 8, 130, 44].filter( arr => arr >= 10 )

*/


</script>

<style>
/*base */
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
    border-radius: 4px;
    }

  .btn-danger{
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover{
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus{
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
</style>