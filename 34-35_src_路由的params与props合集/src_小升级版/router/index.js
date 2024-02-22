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
      children: [
        {
          path: 'news',
          component: News,
          // *************************************** 给News组件中添加到Detail的路由
          children: [
            {
              name: 'xiangqingNews',
              path: 'detail',
              component: Detail,
              props($route) {
                // return { id: $route.params.id, title: $route.params.title }
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                  a: $route.query.a,
                  b: $route.query.b,
                }
              }
            }
          ]
          // ****************************************
        },

        {
          path: 'message',
          component: Message,
          children: [
            {
              name: 'xiangqing',
              // query传参对应的path写法
              path: 'detail',
              // params传参对应的path写法
              // path: 'detail/:id/:title',

              component: Detail,

              // props的第一种写法,值为对象,该对象中的所有key-value都会以props的形式传给Detail组件
              // props: { a: 1, b: 'hello' }

              // props的第二种写法,值为布尔值,如布尔值为真,就会把该路由组件收到的所有params参数(意思就是,如果是用query传参,那就不行了),以props的形式传给Detail组件
              // props: true

              // props的第三种写法,值为函数,该对象中的所有key-value都会以props的形式传给Detail组件;
              // 下面是因为路由中是使用params传数据,所以这边用$route.params.id; 如果是使用query传数据,那么这边就用$route.query.id
              props($route) {
                // return { id: $route.params.id, title: $route.params.title }
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                  a: 1,
                  b: 'hello'
                }
              }
            }
          ]
        }
      ]
    }
  ]
})
export default router