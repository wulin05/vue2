### 本节是通过事件总线的概念,将Student组件传递数据给兄弟组件School组件!!!

#### 步骤：(注意： 是从 Student组件 传数据给 School组件)

1. 在main.js上定义好总线
2. 在 School组件上给事件总线$bus绑定自定义事件hello,以及回调函数：this.$bus.$on('事件名',回调函数)
3. 在 Student组件上就可以通过触发这个事件总线上的hello事件,来传递数据给School：this.$bus.$emit('事件名',数据)

