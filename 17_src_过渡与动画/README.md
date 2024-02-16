
# 本章节：
# test.vue是用动画写,在样式中定义了动画的样式；test2/test3/test4.vue都是用过渡写
# 所以,test.vue只用到 .hello1-enter-active和.hello1-leave-active 过程的样式
# 而 其他三个.vue文件,都是用过渡的写法,那么就要包含有：起点、过程、终点的三个样式


# 也可以使用第三方的动态库

## https://www.npmjs.com/ --> 搜索：animate.css 后, 选择animate, 
## https://www.npmjs.com/package/animate.css 

### 在右侧点击链接：https://animate.style/

#### 安装：npm install animate.css --save

#### 最后, 引入： 由于是css文件,直接在需要该样式的Vue文件中import导入即可

#### 用法就在网页中有说明~~~
