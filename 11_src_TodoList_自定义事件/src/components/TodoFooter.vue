<template>
  <!-- 添加了 v-show指令, 是为了当没有任何数据的时候，整个footer就不用显示了 -->
  <div class="todo-footer" v-show="total"> 
    <label>

      <!-- 
        1. 初始化的时候：利用计算属性isAll,来决定input标签的属性checked是否出现,如果不用计算属性,
           那就直接使用表达式：<input type="checkbox" :checked="doneTotal===total"/>
        2. @change="checkAll",通过change内置事件可以得到element对象(对象的target中有checked值,这个值其实就是勾选还是不勾选的布尔值)
           因为勾选还是取消勾选这个input框都会触发该change事件,调用checkAll函数,最终达到修改App数据的目的
        -->
      <input type="checkbox" :checked="isAll" @change="checkAll"/>

      <!-- 
        如果使用这样的方式的话,那么当操作该单选框的时候,会报错,提示isAll没有定义setter
        意味着,要修改isAll的写法，保证它也有setter方法。
        因为,当操作该单选框的时候,引起计算属性isAll(不是函数,保存在data中)值的变化,那么
        计算属性isAll必须要有setter方法。
        -->
      <!-- <input type="checkbox" v-model="isAll"/> -->

    </label>

    <span>
      <!-- <span>已完成{{ doneTotal }}</span> / 全部{{ todos.length }} -->
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>

    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>

  </div>
</template>

<script>

export default {
  name: 'TodoFooter',

  // props:['todos', 'checkAllTodo', 'clearAllTodo'],
  props:['todos'],

  computed: {
    // 这个是给上面的total使用的
    total(){
      return this.todos.length
    },

    /*
      // <input type="checkbox" :checked="isAll" @change="checkAll"/> 对应isAll的写法：可以不用配置setter
      // isAll如果为true说明任务都完成,false说明有任务没有完成,通过isAll的值,决定这个单选框是否被勾选(其核心是赋给checked的值)   
      isAll(){
        // 通过 已完成的单选框的个数是否等于数组的长度, 如果相等返回ture,反之false。
        return this.doneTotal === this.total && this.total > 0
      },
    */

    /*
      <input type="checkbox" v-model="isAll"/> 对应的isAll的写法
      也能看出不需要methods的checkAll,但是props的checkAllTodo函数还是需要滴。
    */
    isAll:{
      get(){
        // 只有doneTotal等于数组长度,说明全部都完成,并且前提是数组不为空,那么,返回值ture,否则都为false
        return this.doneTotal === this.total && this.total > 0
      },

      // 这个value的含义类似methods中的checkAll(e)中e的含义
      // 总结一句话: input标签type="checkbox"这种情况,val获取得到的是checked属性的属性值
      // 换个角度理解,checkbox的input框,勾选和取消勾选,得到的val必定就是true或false
      set(val){  
        // console.log("~~~~~~", val)
        // this.checkAllTodo(val)        // 这行的checkAllTodo是从App传过来props接收的函数
        this.$emit('checkAllTodo',val)   // 这行的checkAllTodo是App那边给TodoFooter绑定的自定义事件名
      }
    },

    // 注意哈,计算属性的最后是将计算得到的结果保存到data数据中
    // 计算属性中的格式是：属性名：function 函数名(){}, 
    // 原始写法是：
    // doneTotal: function(){...}  或 doneTotal: ()=>{...}
    // 根据ES6的用法,可以写成：
    doneTotal(){
      // // 一、普通写法：
      // let i=0
      // this.todos.forEach(todo => {
      //   if(todo.done) i++
      // })
      // return i

      // 二、高端写法,使用reduce 
      /*
      这个是介绍reduce的用法,首先reduce有两个参数,第一个是函数,第二个是初始值
      所以是 reduce(function(pre,current), initialValue),function有两个参数(pre,current),
      当有initialValue的时候,就是将initialValue作为初值赋给pre,而current的值就是对应
      数组的第一个元素。
      然后reduce会根据数组的长度对应循环的次数,必须有返回值,返回值就在函数体里写,
      并且返回值就赋值给下一次循环的pre,相应的current就是下一个数组的元素。
      针对下面的例子：意思就是,第一次循环的开始,将initiaValue=55赋值给pre,而current的值是99,
      函数体是选取大值,即99>55,第一次循环结束后,返回值是99; 接着第二次循环,pre等于第一次循环的
      返回值,那么pre=99,current是数组的第二个元素11,再次经过函数体的逻辑,依然是99比较大,
      那么,由于数组就两个元素,循环结束,返回值就是99,并且pre=99
      const getMax = (a, b) => Math.max(a, b);
      console.log('!!!!!!!!!!!!', [99, 11].reduce(getMax, 55))
      */
      // 要搞明白pre和current分别代表什么, pre代表当前返回值,current代表当前循环时对应的数组元素
      // return this.todos.reduce((pre, current) => {
      //   return pre + (current.done ? 1 : 0)
      // }, 0)
      // 简写如下,并且current其实就是数组todos的每一个对象,那么就用todo
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)        
    }
  },

  methods: {

    /*
     如果使用了v-model的方式,就不需要checkAll了,就要注释掉~~~~
     @change事件调用了checkAll函数,函数体通过$emit('checkAllTodo')方法触发checkAllTodo自定义事件,
     并将这个checked值传给这个事件的回调函数(回调函数在App组件)。
     change内置事件(其实包括其他内置事件,比如点击click事件也同样)默认给事件的回调函数checkAll函数提供一个element事件参数
     这个checkAll回调函数的作用是：当(勾选、取消勾选)都会触发change事件,从而运行checkAll这个回调函数
     checkAll回调函数中通过$emit方法触发checkAllTodo事件,而该事件的回调函数在App组件中,
     那么TodoFooter这个子组件就往App父组件传递数据了。
    */
    checkAll(e){
      // input单选框(type="checkbox")对应事件e的target中没有value属性,有checked属性
      // 如果input输入框是(type="text"),e的target有value属性....具体请查看13_收集表单数据章节!!!
      console.log("@@@@", e)  // true、false
      this.$emit('checkAllTodo', e.target.checked)
    },


    // 点击button按钮,调用了clearAll函数
    clearAll(e){    // e是为了下面查看事件对象具体有哪些属性而用的,如果不查看的话,可以去掉。
      console.log("999999999999999999999999", e)   // PointerEvent {.....}
      if(confirm('确定清除已完成的任务吗?')){
        this.$emit('clearAllTodo')  // $emit()方法触发clearAllTodo事件
      }
    }

  },   
}

/*
在 reduce 方法中，回调函数接收四个参数：累加器（accumulator）、当前值（currentValue）、
当前索引（currentIndex）和原数组（array）
0,表示初始化pre的值是0,如果没有初始值,那么pre就是数组的第一个元素
所以,必须提供这个0,不然pre就变成了数组里的每一个对象了。
*/
</script>

<style scoped>
  /*footer */
  .todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>