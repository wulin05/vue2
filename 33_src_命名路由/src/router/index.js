// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/about'
import Home from '../pages/home'
import News from '../pages/news'
import Message from '../pages/message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      // Home路由组件的子路由(嵌套路由,套娃开始了...)：News和Message路由组件是在Home路由下的
      children: [
        {
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              name: 'xiangqing',
              path: 'detail',
              component: Detail,
            }
          ]
        }
      ]
    }
  ]
})
export default router