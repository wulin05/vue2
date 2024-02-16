<template>
    <div>
     
      <div class="row">
        <!-- 使用Banner组件标签: 一般组件;  -->
        <Banner/>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- 原始html中我们使用a标签实现页面的跳转 -->
            <!-- <a class="list-group-item active" href="./about.html">About</a>
            <a class="list-group-item" href="./home.html">Home</a> -->

            <!-- Vue的vue-router插件借助router-link标签实现路由的切换: 其实最后在页面上还是转换成a标签 -->
            <router-link class="list-group-item" active-class="active" :to="{ name: 'guanyu' }">About</router-link>
            <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!-- 路由器视图：指定组件的呈现位置  -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import Banner from './components/banner'

  export default {
    name: 'App',
    components: {Banner},
  }
</script>

<style>

</style>