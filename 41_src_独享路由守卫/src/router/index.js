// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/about'
import Home from '../pages/home'
import News from '../pages/news'
import Message from '../pages/message'
import Detail from '../pages/Detail'

// 创建一个路由、之前是这样的： export default new VueRouter({...}) , 意味着创建并立马暴露路由出去(没机会协商下做一些路由守卫、即权限的设定)。
const router = new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: { title: '关于' }
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          meta: { isAuth: true, title: '新闻' },
          // ############ 本节内容---> 独享路由守卫: 只有前置独享路由守卫,没有后置独享路由守卫
          beforeEnter: (to, from, next) => {
            console.log('独享路由守卫beforeEnter的to、from、next参数:', to, from, next)
            if (to.meta.isAuth) {
              if (localStorage.getItem('student') === 'linwu') {
                next()
              } else {
                alert('姓名不是linwu,无权查看news和message页面')
              }
            } else {
              next()
            }
          }
        },
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: { isAuth: true, title: '消息' },
          children: [
            {
              name: 'xiangqing',
              // query传参对应的path写法:
              path: 'detail',
              // params传参对应的path写法:
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
              },
              meta: { isAuth: true, title: '详情' }
            }
          ]
        }
      ]
    }
  ]
})

/*
  1. 全局前置路由守卫 
  上面的任意一个路由, 只要形成了路由的跳转,回调函数一定被调用,而且一定是在切换之前函数被调用

  在上面创建路由之后,下面暴露路由之前,跟路由商量商量,加一个路由守卫,借助router的API:beforeEach(回调函数)
  表示：在每一次路由切换之前 和 初始化的时候,都会调用API:beforeEach
*/
// router.beforeEach((to, from, next) => {
//   console.log('前置路由守卫beforeEach的to和from参数:', to, from)
//   // if (to.name === 'xinwen' || to.name === 'xiaoxi') {              // 可以用命名路由name,如果用了,那么所有的路由都需要命名name
//   // if (to.path === '/home/news' || to.path === '/home/message') {   // 这种还是不好用....
//   if (to.meta.isAuth) {                                               // 上面给需要鉴权的路由配置的isAuth在这边就应用上了....
//     if (localStorage.getItem('student') === 'linwu') {
//       next()
//     } else {
//       alert('姓名不是linwu,无权查看news和message页面')
//     }
//   } else {
//     next()
//   }
// })

/*
  2. 全局后置路由守卫
  表示：在每一次路由切换之后 和 初始化的时候,都会被调用API:afterEach
  注意,与前置路由守卫不同的是,后置路由守卫没有next
*/
router.afterEach((to, from) => {
  console.log('后置路由守卫afterEach的to和from参数:', to, from)
  // 这个的意思当网页没有标题名title的时候,就为atJapan;其实就路径：http://localhost:8080/#/ 没有title,其他的路径都设置了title了.
  document.title = to.meta.title || 'atJapan'
})

export default router