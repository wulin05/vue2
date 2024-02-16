<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord">&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name:'Search',
    data() {
      return {
        keyWord:''
      }
    },
    methods: {
      searchUsers(){
        /* 
          整个流程：
          请求前更新List的数据：Search组件通过button按钮,回调searchUsers函数,触发updateListData总线事件,把数据传给List组件
          从下面的代码流程来看,发送axios请求前先触发一次updateListData事件,主要是将isFirst的值从true变为false,进而让页面不展示
          欢迎词了,以及让isLoading置为true,显示加载中画面; 然后发送axios请求,如果请求成功,则将isLoading置为false,users数组保存数据,
          进而显示search到数据的页面;否则显示errMsg画面。
        */
        this.$bus.$emit('updateListData',{isFirst:false, isLoading:true, errMsg:'', users:[]})
        // ${this.keyWord} 是 JavaScript 中的模板字符串写法，是 ES6 中的一种字符串插值写法。
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            // 请求成功后, 总线触发自定义事件updateListData;更新List数据
            this.$bus.$emit('updateListData', {isLoading: false, errMsg: '', users:response.data.items })
          },
          error => {
            // 请求失败后,同样触发事件; 更新List数据
            this.$bus.$emit('updateListData', { isLoading: false, errMsg:error.message, users:[] })
          }
        )
      }
    },
  }
</script>
