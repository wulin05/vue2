<template>
  <li>
    <label>
      <!-- :checked="todo.done"是页面刷新(赋初值)的时候根据数组的todo.done的值来确定是否有checked这个标签属性
        有这个checked的话就勾选,反之不勾选。
        @change="handleCheck()", 当然也可以将@change换成@click点击事件 
        -->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
     
      <!-- 直接用v-model双向绑定todo.done,点击 -->
      <!-- 但是不建议用v-model,因为todo是props传过来的,props是不可以修改的,但是由于props是浅监视,所以对于复杂类型的属性改了,vue检测不到props的变化,但是如果props传过来的数据是简单类型,那么就会报错了!!! -->
      <!-- 另外,:checked="todo.done",通过todo.done的布尔值来决定checked是否出现,如果出现,那么就勾选,反之,不勾选 -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->

      <span>{{ todo.title }}</span>
    </label>
    <!-- <button chass="btn btn-danger" style="display:none">删除</button> -->
    <button chass="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>

export default {

  name: 'TodoMyItem',
  // 声明接收todo对象
  props:['todo'],
  // mounted() {
  //   console.log(this.todo)     //从props接收到的数据,其实最终也是放到了data里了,所以用this.todo就是获取data中的todo
  // },

  methods: {

    // 点击选框的change事件,调用handleCheck函数,函数内是使用了在App组件上定义,并通过父组件TodoList作为桥梁传递过来的checkTodo函数
    handleCheck(id){
      //checkTodo函数的功能是：通知App组件将对应该id值的todo对象的done值取反
      // 下行是自定义事件的用法,下面的checkTodo是从App传过来的函数
      // this.checkTodo(id)
      // 下面是事件总线的写法,checkTodo是App给总线$bus添加的事件名
      this.$bus.$emit('checkTodo', id)
    },
  
    // 与上面类似,数据在哪里,函数(方法)就要定义在哪里,所以handleDelete函数中调用的爷爷组件App定义的deleteTodo函数
    handleDelete(id){
      // 注意使用confirm来提醒哦~,不用alert
      if(confirm('确定删除吗?')){
        // 同理,下面是自定义事件的写法,deleteTodo是App传过来的函数
        // this.deleteTodo(id)
        // 下面是事件总线的写法,deleteTodo是App给总线$bus添加的事件名
        this.$bus.$emit('deleteTodo', id)
      }
    }
  },

  /*
  alert('确定删除吗?') 只是简单地显示一个警告框，其中包含一个确定按钮。它会在用户点击确定后返回 undefined，
  因此代码会继续执行，但不会影响程序的行为，删除操作不会发生。

  confirm('确定删除吗?') 会显示一个包含确定和取消按钮的对话框。用户点击确定时会返回 true，点击取消时返回 false。
  因此，通过使用 confirm，你可以根据用户的选择来执行相应的操作。
  */
}


</script>

<style scoped>
  /* item */
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li.hover {
    background-color: #fff;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child{
    border-bottom: none;
  }

  /* 鼠标经过(悬浮)时,li颜色变为暗灰色 */
  li:hover {
    background-color: #ddd;
  }

  /* 添加鼠标经过(悬浮)时,li里的button出现删除按钮的效果 */
  li:hover button {
    display: block;
  }
</style>