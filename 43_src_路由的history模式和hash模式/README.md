# npm run build, 生成dist目录(前端的成果)

# 本章目录的demo是根据下面的操作,保存到这里的,是后端用的,跟Vue没关系。

在本地模拟服务器,运行前端build的成功dist：	 
1.桌面创建demo目录
2.vscode打开
3.cli命令：npm init
4.在出现的输入中：package name: (demo) atfengshan_test_serve
5.npm install express
6.然后再在vscode创建server.js文件
7.保存,就可以启动了：node server
8.浏览器访问：localhost:5005/person
9.创建static目录,将dist文件放入到该目录下
10.这样就完成项目在服务器上的部署了,localhost:5005/、localhost:5005/home ...
11.如果router里的index.js文件是用history模式的话,打包给static存放的页面刷新会出现404
12.hash模式就不会出现上面的问题。hash的url会有一个#：localhost:5005/#/
13.解决history模式,刷新页面出现404的bug：
①.借助npm的中间件connect-history-api-fallback: 在npmjs.com有介绍该中间件用来解决history模式的404问题
②.安装该服务器中间件：npm i connect-history-api-fallback
③.在npmjs.com搜索connect-history-api-fallback后,有具体的配置步骤,不过按照server.js里的配置的番号就可以了
④.配置完成后,需要重启服务器: node server