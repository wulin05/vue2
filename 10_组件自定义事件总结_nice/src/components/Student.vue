<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ gender }}</h2>

    <!-- 3-2.下面两行代码是为了验证实例销毁后,关于自定义事件或者js自有的事件的表现情况 -->
    <h2>当前number为: {{ number }}</h2>
    <button @click="add">点击number+1</button>

    <!-- 1.下面是关于在App上给Student绑定自定义事件后,通过click事件调用sendStudentName后,再触发事件~,最终App获取到Student组件传递过来的数据 -->
    <button @click="sendStudentName">把学生名给App</button>

    <!-- 2. App那边在初始化的时候给Student绑定了自定义事件,但是Student组件如果后续不需要自定义事件了,进行解绑,就只在自己这边设置解绑就好了,跟App组件无关 -->
    <button @click="unbind">解绑atJapan(和demo)事件</button>

    <!-- 3-1. 这个是与3.2一起配合查看效果的 -->
    <button @click="death">销毁当前Student组件的实例对象(vc)</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      gender: '男',
      number: '0'
    }
  },

  methods: {
    sendStudentName(){
      // 关键！关键！关键！
      // 因为在App上给Student组件的实例对象vc绑定了atJapan的事件,
      // 所以,在本Student组件上通过this就能轻而易举地拿到atJapn这个事件,但是需要通过$emit() 这个方法来触发！！！
      // 但是,其实最终也是通过上面的button绑定的click事件, 点击该button按钮,触发sendStudentName这个函数,这个函数里面有：this.$emit('atJapan'),
      // 那不就是第三行的说法,通过$emit()方法又可以触发atJapan事件~~~~,最终由于atJapan事件会调用App中定义的getStudentName函数,那不就等于App
      this.$emit('atJapan', this.name, this.gender, 999)

      // 这个是App又给Student组件绑定了demo自定义事件~~~~,不传数据,只是为了验证 同时解绑多个或全部事件 。
      this.$emit('demo')

      //这个是为了验证在App上使用@click方式,也会被认为是自定义事件,那么也需要$emit()方法来触发
      this.$emit('click')
    },

    unbind(){
      // 这个解绑,就是
      // this.$off('atJapan')   //解绑一个自定义事件
      this.$off(['atJapan', 'demo'])   // 解绑多个自定义事件
      // this.$off()   // 解绑全部自定义事件
    },
    death(){
      // 销毁当前Student组件的实例,销毁后所有Student实例的自定义事件全都不奏效。
      this.$destroy()
    },

    add(){
      this.number++
    }
  },

}
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>