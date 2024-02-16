<template>
    <div class="container">
      <Category title='美食'>
        <img slot="center" src="http://g.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3e770bd00d868ba61ea9d345f2.jpg" alt="">
        <a slot="footer" href="http://www.atguigu.com">更多美食</a>
      </Category>

      <Category title='游戏'>
        <ul slot="center">
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul> 
        <div slot="footer" class="foot">
          <a href="http://www.atguigu.com">单机游戏</a>     
          <a href="http://www.atguigu.com">网络游戏</a> 
        </div>    
      </Category>

      <Category title='电影'>
          <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
          <!-- 
            由于div和h4都是放入footer插槽,就不用分开都写,再用template包裹,写一次slot就行了
            当然div也能达到效果,但是无缘无故多了一层div结构,template就不会了。
            <template v-slot:footer>, Vue2.6后可以用这样的写法：v-slot:footer
            但只能在template或组件标签上写!!!
          -->
          <template slot="footer">
              <div class="foot">
                <a href="http://www.atguigu.com">经典</a>     
                <a href="http://www.atguigu.com">热门</a> 
                <a href="http://www.atguigu.com">推荐</a> 
              </div>   
              <h4>欢迎前来观影</h4>  
          </template>
      </Category>     
    </div>
</template>

<script>
  import Category from './components/category'

  export default {
    name: 'App',
    components: {Category},
    data() {
      return {
        foods:['火锅','燃烧','小龙虾','牛排'],
        games:['红色警戒','穿越火线','Dota','真三国无双'],
        films:['《教父》','《拆弹专家》','《你好,李焕英》','《小清华-城头》'],
      }
    },
  }
</script>

<style>
 .container, .foot{
  display: flex;
  justify-content: space-around;
 }
</style>