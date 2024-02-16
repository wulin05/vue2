<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <!-- 注意与App里,在Student组件标签绑定了atJapan事件的不同哟,这个是给按钮button绑定了click事件~~~  -->
    <button @click="sdSchoolName">把学校的信息给App</button>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '凤山大学',
      address: '城头'
    }
  },

  props: ['getSchoolName'],

  methods: {
    sdSchoolName(){
      this.getSchoolName(this.name, '请叫我V神!!!')
    }
  },

}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }

</style>