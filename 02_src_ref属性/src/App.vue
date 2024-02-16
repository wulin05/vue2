<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>

    <!-- 
      传统的html元素使用id标签或ref标签,基本没区别,都是该DOM元素完整结构。

      组件的id和ref标签区别就大了
      组件的ref标签：this.$refs.sch是School组件实例对象,
      而组件id标签:document.getElementById('sch')是School组件的 完整的、真实的DOM元素。

      ！！！重点在于这个命令： this.$refs.xxx.指令 &&  xxx: 组件的话就是ref='xxx'; html元素的话，就是元素标签名input、button、a、......
      -->
    <School ref="sch"></School>
    <School id="sch"></School>   
    <School/>
  </div>
</template>

<script>
import School from './components/School'

export default {
  name: 'App',
  components: {School},
  data() {
    return {
      msg: '欢迎来到Vue~~~',
    }
  },
  methods: {
    showDOM(){
      // 关键点在this.$refs, this是指向App组件：this.$refs是所有打了 ref 标签的DOM元素、或组件实例对象。
      // 意思就是html用了ref是DOM元素、组件用了ref标签是组件实例对象！
      console.log(this.$refs)         // {title: h1, btn: button, VueComponent{...}}
      console.log(this.$refs.title)  // 真实DOM元素： <h1>欢迎来到Vue~~~</h1>
      console.log(this.$refs.btn)   // 真实DOM元素： <button>点我输出上方的DOM元素</button>

      /*
        这个是获取School组件的实例对象,这个对于组件间通信需要这个实例对象至关重要!!!!!!
        VueComponent {_uid: 2, _isVue: true, __v_skip: true, _scope: EffectScope, $options: {…}, …}
      */
      console.log(this.$refs.sch)
      
      /*
        使用id这种方式,获取到的是School组件对应的完整DOM结构,而不是VueComponent组件实例对象, 如下：
          <div class="school" id="sch">
            <h2>学校名称： 凤山</h2>
            <h2>学校地址： 福州</h2>
          </div>
      */
      console.log(document.getElementById('sch'))
    }
  },
}
</script>

<style>

</style>