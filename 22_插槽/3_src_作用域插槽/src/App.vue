<template>
    <div class="container">
      <Category title='游戏'>
        <template scope="atJapan">
          <ul>
            <li v-for="(g, index) in atJapan.games" :key="index">{{ g }}</li>
          </ul>
        </template>
      </Category>   

      <Category title='游戏'>
        <template scope="{games}">
          <ol>
            <li style="color:red" v-for="(g, index) in games" :key="index">{{ g }}</li>
          </ol>
        </template>
      </Category>   

      <Category title='游戏'>
          <template slot-scope="{games}">
            <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
          </template>
        </Category> 
    </div>
</template>

<script>
  import Category from './components/category'

  export default {
    name: 'App',
    components: {Category},
  }
</script>

<style>
 .container, .foot{
  display: flex;
  justify-content: space-around;
 }
</style>