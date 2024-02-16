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
      todos: JSON.parse(localStorage.getItem('todos')) || []
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
        //理解最后面的关于filter的说明后,就可以知道,完成的任务的todo.done值是ture,  
        // 过滤条件： return !todo.done, 那就意味着, 完成任务的done值为false, 未完成任务的done值为true,结果最后被过滤出来的就是未完成的任务啦.....
      })
    }
  },
  
  // 监视todos的值变化,但是下面的还有bug,因为,当去勾选的时候,是对todo.done修改,但是由于默认没有开启深度监视,所以对象里面的属性变化的时候,不会引起监视的调用....
  // watch: {
  //   todos(value){   // 监视todos的值, 形式参数有两个(newValue, preValue),但我们一般只关心新值
  //     localStorage.setItem('todos', JSON.stringify(value))
  //   }
  // }

  watch: {
    // 在vue2对todos进行深度监视,就不能写成简写方式： todos(newValue){......}, 
    // 因为deep这个参数,是作为被监视内容的配置项。对比下,其实简写方式就是把    :{ deep:true, handler   这部分省略了。
    // 非常重要: 在其他组件中,不管是添加任务、删除任务、勾选(或取消)勾选任务、清除已完成任务 等等,都是对数组todos操作,所以,这个监听必须是深度监听。
    todos:{
      deep: true,
      handler(newValue){   // 一般只关心变化后的数据
        // 监视的是todos,todos是数组,数组中存的是一个一个的对象,当进行深度监视的时候,todos不管是一个对象变化,还是对象中的元素变化,这个newValue是变化后的todos全部数据！！！
        // console.log("~~~~~~~~~~~~", newValue===this.todos)
        localStorage.setItem('todos', JSON.stringify(newValue))
      }
    }
  }

}

/*
说下Array.prototype.filter()的理解：

函数的作用可以理解为过滤条件(是一个布尔值true或false), 比如下面的例子：
function isBigEnough(val) {
  return val >= 10;
}
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

上面两行合起来写就是：
[12, 5, 8, 130, 44].filter(isBigEnough(val){return val >= 10})

简写起来就是：
[12, 5, 8, 130, 44].filter( val => val >= 10 )

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