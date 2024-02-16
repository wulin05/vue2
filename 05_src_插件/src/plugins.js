// const obj = {
//   install() {
//     console.log('@@@install')
//   }
// }

// // 默认暴露
// export default obj


// 同样是默认暴露,这样更简略....
export default {

  // 总：定义插件：
  install(Vue) {
    // console.log('@@@install', Vue)   // install可以得到一个参数,就是Vue的缔造者,Vue构造函数

    // 一、全局过滤器
    Vue.filter('mySlice', function (val, startNumber, endNumber) {
      return val.slice(startNumber, endNumber);
    })

    // 二、自定义指令
    Vue.directive('fbind', {
      //1. 指令与元素成功绑定(效果是:当刷新画面,光标出现在绑定的元素位置)
      bind(el, binding) {
        // console.log('bind')
        el.value = binding.value;
      },
      //2. 指令被插入页面时
      inserted(el, binding) {
        // console.log('inserted')
        el.focus();
      },
      //3. 指令所在模版被重新解析时
      update(el, binding) {
        // console.log('update');
        el.value = binding.value;
      }
    })

    // 三、定义混入
    Vue.mixin({
      //1. 这个是混入数据;
      data() {
        return {
          x: 100,
          y: 200
        }
      },

      // 下面这两个混入,不用,想用注释解开就行
      // //2. 混入方法
      // methods: {
      //   showName() {
      //     alert(this.name)
      //   }
      // },

      // //3. 混入生命周期
      // mounted() {
      //   console.log('我是mixin.js里的"你好呀~~~~~"')
      // },
    }),

      // 给Vue的原型对象添加hello方法：在Vue原型上添加的成员(属性和方法),vm和vc就都能使用了!!!!!  ====> 如果忘记了，请重新复习"非单文件组件的内容 ",非常地重要！！！！！！！
      Vue.prototype.hello = () => {
        alert("欢迎来到Vue世界！！！")
      }
  }
}
