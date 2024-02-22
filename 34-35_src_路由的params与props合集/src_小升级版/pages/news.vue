<template>
  <ul>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>

    <!-- 下面是我自己的想法: 在new组件中也能路由跳转到Detail.vue -->
    <router-link :to="{
        name: 'xiangqingNews',
        query: {
          id: messageList[0].id,
          title: messageList[0].title,
          a: 'linwu',
          b: 'wulin',
        }
      }">
        {{ messageList[0].title }}
    </router-link>

    <hr>
    <router-view></router-view>
  </ul>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'News',

    computed: {
      ...mapState(['messageList', 'personList'])
    },
  }
</script>

<style>

</style>