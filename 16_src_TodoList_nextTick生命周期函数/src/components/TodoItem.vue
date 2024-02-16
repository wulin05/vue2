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

      <!-- 本节重点修改的部分： 下面4行html元素: span、input、button、button -->
      <!--  v-show(条件渲染): 当todo.isEdit为真时,显示input框,不显示span;  blur是内置的失去焦点事件: 当输入框失去光标焦点的时候,切换为正常的span元素 -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
          type="text"
          v-show="todo.isEdit" 
          :value="todo.title" 
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"              
          >
          <!-- 
            ####################################################
            ref="inputTitle"这个是为了最后一步使用:  
            {关于组件使用ref标签：10_组件自定义事件总结 和 02_src_ref属性 这两个章节,对于ref在 html标签和在组件标签中的
            最关键的一点就是：this.$refs.xxx (xxx: html元素 或 组件定义名; 如果记忆模糊了,建议去看一遍)
            }              
          -->

    </label>
    <!-- <button chass="btn btn-danger" style="display:none">删除</button> -->
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <!-- v-show="!todo.isEdit"跟span的逻辑是一样的,当不在编辑状态下,编辑按钮出现;当在编辑状态下,编辑按钮就不应该再出现了 -->
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script scoped>
// 导入消息订阅与发布的第三方库
import PubSub from 'pubsub-js'

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
      // 自定义事件的用法,下面的checkTodo是从App传过来的函数
      // this.checkTodo(id)
      // 事件总线的写法,checkTodo是App给总线$bus添加的事件名
      this.$bus.$emit('checkTodo', id)
    },
  
    // 与上面类似,数据在哪里,函数(方法)就要定义在哪里,所以handleDelete函数中调用的爷爷组件App定义的deleteTodo函数
    handleDelete(id){
      // 注意使用confirm来提醒哦~,不用alert
      if(confirm('确定删除吗?')){
        // 同理,下面是自定义事件的写法,deleteTodo是App传过来的函数
        // this.deleteTodo(id)
        // 下面是事件总线的写法,deleteTodo是App给总线$bus添加的事件名
        // this.$bus.$emit('deleteTodo', id)
        // 订阅消息的发布:
        PubSub.publish('deleteTodo', id)
      }
    },

    // 编辑按钮：只负责当点击编辑按钮时,是出现input框,所以将isEdit值改为true
    handleEdit(todo){
      // todo.isEdit = true  // 不能这么写,isEdit没有响应式
      // 需要给todo(对象)添加属性isEdit,并且是响应式的：
      // 如果todo身上已经有了isEdit,即,之前被点击过编辑按钮,但todo.isEdit如果被编辑过了,那么值为真或假,
      // 而不能代表是否有这个todo.isEdit属性; ----->这个非常地细节,虽然这样写,最终的效果也达到了,但是不完美
    
      /*
      if(todo.isEdit){ 
      上面的思路是 没有isEdit属性就走else分支;当有isEdit属性,但是属性值为false,那么还是走else分支,再次通过添加属性isEdit的方式将值改为true
      下面的思路是 判断到底有没有isEdit属性,没有才会跑到else分支进行添加isEdit属性,只要有,就不需要添加属性,将isEdit属性改为true就行。
      */
      if(todo.hasOwnProperty('isEdit')){   
        todo.isEdit = true
      }else{
        this.$set(todo, 'isEdit', true)
      }
      // ########################################################### 最后一步：
      // this.$refs.inputTitle.focus()  // 但是不起作用,因为当Vue走里面逻辑的时候,是先把逻辑都走完了,数据变化了最后再解析模板.不然你这个逻辑里面要改10次数据,难道要解析模板10次么？
      // 这时候Vue就提供了这个API, $nextTick(回调函数); 这个API的作用是：$nextTick所指定的回调,会在DOM节点更新完毕之后再执行！！！
      this.$nextTick(() => {
        this.$refs.inputTitle.focus()
      })
    },
    
    // 在input框失去焦点调用handleBlur函数(真正执行修改todo的isEdit值的逻辑)
    handleBlur(todo,e){
      // 失去焦点也要干一件事跟点击编辑按钮相反,是span,而不是input框,所以isEdit的值是false
      todo.isEdit = false

      // 解决当去编辑输入框的内容时,反而将输入框的内容为空的时候,也能提交的情况
      if (!e.target.value) return alert('输入不能为空!')

      // 然后,通过触发updateTodo自定义总线事件去修改App中的todo数据的isEdit值
      // 也侧面地说明了@blur="handleBlur(todo)"的@blur是内置的事件,而不是自定义事件(好好理解！)
      // this.$bus.$emit('updateTodo', todo.id, todo.title) // todo.title这个就错了,还是原来输入框的值,需要通过事件e.target.value来得到输入的新值   
      // 所以,回到 最上面的 input框,还需要给 @blur="handleBlur(todo)一个参数,得到：@blur="handleBlur(todo, $event)
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
      // 这时候再去App组件去给事件总线绑定"updateTodo"自定义事件,理解编码的先后顺序哦,因为这个章节是先从这个组件开始修改的。
    },
  },


  // 到目前为止,上面的代码基本成型,props(父子通信), 自定义事件(子传父)、全局事件总线(随便传,推荐)、消息的订阅和发布(随便传,第三方插件,不是很推荐)
  // 但是还差一点点小瑕疵： 当点击任务1的编辑按钮、再点击任务2的编辑按钮、.....，可以让所有任务处于编辑状态,这个不是理想的情况。
  // 所以,解决的思路是，当点击任意一个任务的编辑按钮,不仅仅变成输入框,同时把焦点放入输入框,这样当去点击其他任务的编辑按钮的时候,本任务自然就恢复span状态。

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