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

              /*
              所以,这边我自己总结一波：
              个人觉得最简便的方法是第二种,但是第三种我个人比较喜欢,因为不管是query还是params哪种传参都可以用,步骤是：
              1. message.vue中使用写法二, 即、query方式传数据, 这样的话, 这边的path就直接用path:'detail',不用params的path写法,需要占位符,麻烦;
              2. 然后就用目前的上面的props($route)的return写法,完美~~~

              关于props第三种写法的解构赋值写法：
              props(query) {
                return { id: query.id, title: query.title }
              }

              连续结构赋值
              props(query:{id, title}) {
                return { id, title }
              }

              */

            }
          ]
        }
      ]
    }
  ]
})
export default router