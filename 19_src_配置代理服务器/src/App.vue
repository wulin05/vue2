<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    methods: {
      getStudents(){
        // axios.get('http://localhost:5000/students').then(   //没有代理服务器的话,axios的http:8080请求访问服务器5000端口,由于同源策略,会有跨域的问题：服务器有回复,但是在自己这边的内核被拒了。
        // axios.get('http://localhost:8080/students').then(   //通过代理服务器的话,只要写8080端口就可以了,代理服务器接收axios请求,代理服务器5000端口转发请求给服务器,不会有跨域的问题。
        axios.get('http://localhost:8080/atJapan/students').then(
          response => {
            console.log('请求成功了', response.data)
          },
          error => {
            console.log('请求失败了',error.message);
          }
        )
      },

      getCars() {
      axios.get('http://localhost:8080/demo/cars').then(
        response => {
          console.log('请求成功了', response.data)
        },
        error => {
          console.log('请求失败了', error.message);
        }
      )
    },
    },

  }
</script>

<style>

</style>