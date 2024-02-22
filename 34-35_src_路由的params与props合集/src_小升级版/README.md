## 本节是我自己为了证明： Detail路由组件不仅仅只有Message组件可以使用, 同时在News组件中也可以使用Detail路由组件


### 主要修改的地方是：

1. News组件添加了 <router-link ...></router-link>、<router-view></router-view>、以及其他配置。具体请到News组件去查看。 

2. router目录的index.js文件中，给News路由添加了Children配置项,让Detail成为News的子路由。

3. 注意News给Detail传输数据的配置 和 Message给Detail传输数据的配置 之间细微的不同。。。