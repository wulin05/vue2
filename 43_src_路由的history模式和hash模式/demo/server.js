const express = require('express')    // 1.引入express （使用CommonJS模块化)
// 6.要引入connect-history-api-fallback,首先要在控制台安装：npm i connect-history-api-fallback
const history = require('connect-history-api-fallback')

const app = express()    // 2.创建一个app服务实例对象
// 7.使用,必须在第5步骤之前使用
app.use(history())

// 5.让demo.html页面被服务器认识,就要借助express的static中间件,专门用于指定静态资源
//   重启服务器(ctrl+c停止服务、node server启动服务)后,localhost:5005/demo.html就能访问了。
//   如果将demo.html改成index.html,那么访问localhost:5005就能访问index.html了。
app.use(express.static(__dirname + '/static'))

app.get('/person', (req, resp) => {     // 4.配置后端路由
  resp.send({     // 给客户端返回数据
    name: 'tom',
    age: 18
  })
})

app.listen(5005, (err) => {    // 3.app.listen参数：5005监听端口, 回调函数
  if (!err) console.log('服务器启动成功了')
})

