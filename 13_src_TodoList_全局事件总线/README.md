### 本节 主要是说明全局事件总线的用法： 

1. 安装全局事件总线： main.js
2. App组件和TodoItem组件之间的数据传递,原先是通过App上只是通过给子组件TodoFooter和TodoHeader绑定了自定义事件,让它们去触发事件,由于回调函数在App上,所以App可以得到数据。

3. 但是TodoItem是App的孙组件,所以关于TodoItem组件想要 勾选/取消勾选 、删除任务这两个
   操作，需要将id传给App组件去修改todos数组的数据, 原先的方式是通过App组件将函数传给
   子组件TodoList,再传给TodoItem的方式, 所以：
   本机的事件总线就是解决App组件和TodoItem组件直接进行数据传递。

4. 思路： 由于是TodoItem想要传 3点所说的 id给 App去修改数组的数据,所以, 

(1) App给事件总线$bus绑定自定义事件,这样回调函数就在App自己身上了
(2) TodoItem 可以去触发总线$bus上的App绑定的事件, this.$bus.$emit('事件名', 数据), 
    从这个触发就可以看出, App通过事件的回调函数得到TodoItem的数据了。