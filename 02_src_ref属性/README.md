# 笔记

## ref属性

1. 被用来给元素或 子组件 注册引用信息(id的替代者)
2. 应用在html标签上获取的是真实DOM元素,应用在组件标签上是组件实例对象VueComponent(vc)
3. 使用方式:
      打标识: <h1 ref='xxx'>...</h1> 或 <School ref='xxx'></School>
      获取： this.$refs.xxx

