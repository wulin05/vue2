<template>
  <div class="app">

    <!-- 2. 学生姓名是从Student子组件自定义事件传过来的, -->
    <h2> {{ msg }}: {{ studentName }} </h2>
    
    <!-- 通过父组件给子组件传递函数getSchoolName的props实现: 子给父传递数据 -->
    <h2 v-show="schoolName">学校名称: {{ schoolName  }} / 座右铭: {{ schoolOther[0] }}</h2>
    <School :getSchoolName="getSchoolName"/>

    <!-- 
      1. 自定义事件第一种写法,使用 v-on:'事件名',简写是：@事件名
      v-on:xxx这种方式给子组件绑定自定义事件atJapan后,并给事件指定了getStudentName这个回调函数
      所以,当子组件atJapan(虽然是父组件强塞的)触发后(通过$emit()方法触发),将触发时(想要)携带的
      数据通过父组件App给atJapan指定的回调函数getStudentName进行后续的处理,比如在App组件上需要
      这个数据进行插值语法的使用
      -->
    <!-- <Student v-on:atJapan="getStudentName" @demo.once="m1"/>    -->

    <!-- 
      6. 当不使用第一种写法的时候
      自定义事件第二种写法,使用ref属性: 在父组件App中声明子组件Student的引用,并将其命名为student
      根源在于：this.$refs.student就是Student组件的实例对象vc, 所以通过使用$on给Student的vc绑定自定义数据、回调函数。
      比如：绑定自定义事件atJapan, 以及触发atJapan事件所对应的回调函数getStudentName...
      -->
    <Student ref="student" @demo.once="m1" @click="showTest"/> 
      <!-- 
        100000：写在最后：
        @click="showTest" : 写在组件标签的@click='回调函数名',click是自定义事件,不是内置的click事件哦~
        click事件是会被认为是自定义事件绑定到子组件Student上的
        想要触发此click事件,步骤跟前面的自定义事件的一样。

        @click.native="showTest" : 是原生的click事件！！！
        含义是： 给Student组件的最外层(div)添加了一个点击事件, 事件的回调函数是showTest
        表现形式是：在Student组件的任意位置点击,都会弹出 "click被当做自定义事件喽!!!"

      -->

  </div>
</template>

<script>
  import Student from './components/Student'
  import School from './components/School'

export default {
  name: 'App',
  components: {School, Student},
  data() {
    return {
      msg: '你好呀~~~',
      // 3. 在data中定义这个studentName数据,在步骤2的插值语法中调用
      studentName: '',
      schoolName: '',
      schoolOther: '', 
    }
  },

  methods: {
    getSchoolName(name, ...params){
      console.log('App收到了School组件的信息:', name, params)
      this.schoolName = name
      this.schoolOther = params
    },

    // 4. 第一种写法的自定义事件被触发后的回调函数
    // 8. 补充,第二种写法的自定义事件,在mouted钩子中也需要用到这个函数
    getStudentName(name, ...params){
      console.log('App收到了学生名:', name, params)     
      // 5. 从Student组件中获取到的name赋值给data中的studentName
      this.studentName = name? name:None
    },

    m1(){
      alert('App收到了demo事件被触发~~~')
    },

    showTest(){
      alert('click被当做自定义事件喽!!!')
      // alert('click是原生的点击事件!!!')
    }

  },

  /*
  7.重要!!!重要!!!重要!!! 
    生命周期钩子mounted: 这个是为了配合App <Student ref="student"/> ref属性声明对子组件的引用,
    后续进行绑定事件和回调函数：
    this.$refs.student.$on() this.$refs.student用来找到Student组件的实例对象VueComponent,
    然后通过(重点在这) $on() 来绑定自定义事件以及事件的回调函数!!!
  */ 
  mounted() {
    /* 
    (1)方法一、这样的写法是ok的：
       this.$refs.student：表示通过 $refs 引用到父组件中名为 student 的子组件。
       $on('atJapan', this.getStudentName)：表示在子组件上监听名为 'atJapan' 的自定义事件，并指定事件触发时执行的回调函数为 this.getStudentName。
       这样当子组件中触发了 'atJapan' 事件时，父组件中的 this.getStudentName 方法将会被调用。
    */ 
    // this.$refs.student.$on('atJapan', this.getStudentName)

    /*
    (2)方法二、但是,如果是下面的写法,就有问题了,原因是：
       这个function回调函数getStudentName功能是直接写在this.$refs.student.$on()括号中的,不是像方法一那样,在父组件App定义后赋给子组件Student的,
       所以，子组件Student就有了这个功能函数function(),并且这个getStudentName函数跟App组件自身没有任何关系
       所以，this是指向Student子组件vc,根本就没有this.studentName, studentName是App的data里的属性
       当然，出现问题了。
    */
    // this.$refs.student.$on('atJapan', function(name, ...params) {
         // this的输出是Student组件的vc实例 
    //   console.log('注意查看这种方式的this是指向哪个vc实例', this)
    //   console.log('App得到从Student组件传过来的数据:', name, params)
    //   this.studentName = name
    // })
      
    /*
    (3)方法三、所以,如果非要在this.$refs.student.$on()去写回调函数的具体功能,可以使用箭头函数
       由于箭头函数没有this,那么在箭头函数中使用的this就要往箭头函数的"外面"找,
       此时的函数体内的 this.studentName = name 的this自然就找到了App组件的实例对象vm,
       自然this就指向了App组件的实例对象vm了。
    */ 
    this.$refs.student.$on('atJapan', (name, ...params)=>{
      console.log('注意查看这种方式的this是指向哪个组件的vc实例', this)
      console.log('App得到从Student组件传过来的数据:', name, params)
      this.studentName = name
    })

    /*
    (4)总结：Vue底层设计,谁触发的这个atJapan事件,那么这个事件回调函数当中的this就指向谁。
            首先这个自定义事件肯定是在子组件中被触发,所以默认情况下getStudentName回调函数
            中的this是指向Student组件,安装方法一,由于这个回调函数是在App的methods中定义的,
            那么该回调函数getStudentName的this就变成指向App了。
            atJapan自定义事件触发后：
              A.如果自定义事件是使用方式一绑定的,那么可以理解为：
                子组件的Student的atJapan事件被触发后,引起了父组件App的回调函数getStudentName的调用
              B.如果自定义事件是使用方式二绑定的,那么还要根据：
                this.$refs.student.$on('atJapan', this.getStudentName)                 正确
                this.$refs.student.$on('atJapan', (name, ...params)=>{函数体})         正确
                this.$refs.student.$on('atJapan', function(name, ...params) {函数体})  错误                
    */
  },

}

</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>