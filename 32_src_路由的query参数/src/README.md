# 本节关键点在

1. Message路由组件中又有一个子路由组件Detail, 但是Message的子路由组件Detail是一个,不像之前
  ,比如 Home路由组件里有News和Message子路由组件。

2. 有时候很难用语言去表达： Detail组件只有一个,是通过在Message组件中点击传递参数,让Detail组件显示
  不同的内容,不像上面说的在Home组件中点击News和Message组件的时候,路由会变更,显示不同的画面内容,
  并且路由变更会导致原先挂载的路由子组件销毁、现路由组件的挂载。

3. 本节关键的配置是：router->index.js ;  pages->message.vue和Detail.vue ; 


