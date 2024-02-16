<template>
    <div class="row">
      <!-- 展示用户列表 -->
      <!-- <div class="card"> -->
      <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
        <!-- <a href="https://github.com/xxxxx" target="_blank"> -->
        <a :href="user.html_url" target="_blank">         
          <!-- <img src="/logo.svg" style="width: 100px"> -->
          <img :src="user.avatar_url" style="width: 100px">
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div> 

      <!-- 展示欢迎词 -->
      <h1 v-show="info.isFirst">欢迎使用!</h1>

      <!-- 展示加载中 -->
      <h1 v-show="info.isLoading">加载中...</h1>

      <!-- 展示错误信息 -->
      <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </div>
</template>

<script>
  export default {
    name:'List',
    data() {
      return {
        info:{
          users: [],
          isFirst: true,     // 是否为初次展示
          isLoading: false,  // 是否为加载中
          errMsg: '',        // 错误信息
        }
      }
    },
    mounted() {
      // 给总线绑定自定义事件getUsers,以及回调的箭头函数
      this.$bus.$on('updateListData', (dataObj) => {
        // console.log('我是List组件,收到数据: ', dataObj)
        // this.info = dataObj  
        // 如果this.info = dataObj这么写,isFirst在axios请求后丢失(因为只传users、isLoading、errMsg三个数据),虽然isFirst丢失后,
        // 值就是undefined,结果也是不会展示欢迎词,但是毕竟是破坏了数据结构。所以更好的办法是：ES6的基本功
        this.info = {...this.info, ...dataObj}  
        //通过字面量的形式去合并对象,想象下: this.info和dataObj属性都摊开,两者重名的属性以后面的dataObj为主,dataObj没有的属性,this.info的该属性值保持不变
      })
    },
  }
</script>

<style scoped>
  .album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card>img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>