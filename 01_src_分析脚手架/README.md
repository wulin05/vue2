# 笔记

## 一、关于vue的安装
### vue2安装：
1.安装或更新脚手架： 通过vue 查看是否已经安装好了脚手架 vue -V 或 vue --version
npm install -g @vue/cli
# OR
yarn global add @vue/cli

2.创建一个项目：
vue create my-project
# OR
vue ui

3.启动项目
cd my-project
npm run serve

### vue3安装
方式一、通过传统的vue_cli脚手架工具(构建工具)创建项目vue3_test
         vue create vue3_test  ---> cd vue3_test ---> npm run serve

方式二、通过vite创建项目vue3_test_vite(里面有步骤..)
        只需要下面这个命令,即可;本质是vite安装和执行 create-vue
         npm create vue@latest

#### 官方文档：https://cn.vuejs.org/guide/scaling-up/tooling.html#vite
#### vite官网：https://vitejs.cn/


## 二、关于脚手架
### 文件结构：此处省略

### 关于不同版本的Vue:
  vue.js与 vue.runtime.xxx.js的区别:
  (1)、vue.js是完整版的Vue,包含：核心功能+模板解析器
  (2)、vue.runtime.xxx.js是运行版的Vue,只包含：核心功能,没有模板解析器
  因为vue.runtime.xxx.js没有模板解析器,所以不能使用template配置项,需要使用  
  render函数接收到的createElement函数去指定具体内容

### vue.config.js配置文件
  1. 使用 vue inspect > output.js 可以导出并查看到Vue脚手架的默认配置
  2. 这个文件是自己创建的,是用来调整脚手架的工作模式的,具体有哪些配置,参考：Vue2官网下 
     的"生态系统"-->"Vue CLI"--跳转->"配置参考"
     比如,凭什么main.js是入口,凭什么public/index.html就是主页面...等等
