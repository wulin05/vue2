// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/about'
import Home from '../pages/home'

// 创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
export default router