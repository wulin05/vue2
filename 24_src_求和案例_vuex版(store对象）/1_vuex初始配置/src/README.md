# 一、Vuex概念：
1. 在Vue中实现集中式状态(数据)管理的一个Vue插件,对vue应用中多个组件的共享
   状态进行集中式的管理(读/写),也是一种组件间通信的方式,且适用于任意组件间通信。

2. 何时使用：多个组件间需要共享数据时    
 
## 二、关于vuex插件版本与Vue版本的对应关系：
1. vuex3  <===> Vue2
2. vuex4  <===> Vue3

### 所以在Vue2中要使用vuex插件版本,要指定版本是vuex3: npm i vuex@3

## 三、在main.js中引入并使用vuex插件,全局vm和vc就有了$store属性了

## 四、官方写法：
1. 在src目录下创建store文件夹,文件夹下有index.js
   这就意味着该Vue2项目使用了vuex3插件

## 五、最终思路总结
1. 创建store目录以及目录下的index.js文件
2. index.js文件中引入并使用Vuex插件
3. 通过Vuex插件去创建并暴露store
4. 对于main.js文件来说, 它只要引入index.js文件暴露的store对象,完成Vue组件中store配置项。

### 所以,Vuex插件主要的配置在store目录下的index.js文件,main.js主要是引入并使用store。


   