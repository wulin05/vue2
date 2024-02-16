/*
  这个文件是自己创建的,是用来调整脚手架的工作模式的,具体有哪些配置,参考：Vue2官网下的"生态系统"-->"Vue CLI"--跳转->"配置参考"
  比如,凭什么main.js是入口,凭什么public/index.html就是主页面...等等
*/

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({   // es6的暴露,不是这边的vue的独立暴露、统一暴露、默认暴露
//   transpileDependencies: true,
//   // pages: {
//   //   index: {
//   //     entry: 'src/linwu.js', // 可以将入口文件main.js改成linwu.js
//   //   },
//   // }
//   lintOnSave: false,    // 关闭语法检查
// })


// module.exports = {
//   pages: {
//     index: {
//       // page 的入口
//       entry: 'src/index/main.js',
//       // 模板来源
//       template: 'public/index.html',
//       // 在 dist/index.html 的输出
//       filename: 'index.html',
//       // 当使用 title 选项时，
//       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//       title: 'Index Page',
//       // 在这个页面中包含的块，默认情况下会包含
//       // 提取出来的通用 chunk 和 vendor chunk。
//       chunks: ['chunk-vendors', 'chunk-common', 'index']
//     },
//     // 当使用只有入口的字符串格式时，
//     // 模板会被推导为 `public/subpage.html`
//     // 并且如果找不到的话，就回退到 `public/index.html`。
//     // 输出文件名会被推导为 `subpage.html`。
//     subpage: 'src/subpage/main.js'
//   }
// }

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js'
    },
  },
  lintOnSave: false, //关闭语法检查

  // 开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },

  // 开启代理服务器(方式二)
  devServer: {
    proxy: {

      // /atJapan 这个可以自己修改,表示前端发送请求如果是http://localhost:8080/atJapn/students带有atJapan的话,就走代理
      '/atJapan': {
        target: 'http://localhost:5000',
        // 必须配置下面这个path选项,Vue官网没有明确体现,正则的意思是：将以/atJapan开头的匹配为空字符串''
        pathRewrite: { '^/atJapan': '' },
        // 用于支持websocket
        ws: true,
        // changeOrigin用户控制请求头中的host值; true：代理服务器伪装,说自己是从5000端口过来的; false：代理服务器如实回答目标服务器自己的端口信息;默认true,而且建议也是用true
        // 
        changeOrigin: true
      },

      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        ws: true,
        changeOrigin: true
      },
    }
  }
})