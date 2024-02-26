(function(){"use strict";var t={329:function(t,e,n){var o=n(6369),i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"guanyu"}}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},r=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forword}},[t._v("前进")]),e("button",{on:{click:t.goTest}},[t._v("测试go的功能")])])])},a=[],l={name:"Banner",methods:{back(){this.$router.back()},forword(){this.$router.forward()},goTest(){this.$router.go(2)}}},u=l,c=n(1001),f=(0,c.Z)(u,s,a,!1,null,null,null),v=f.exports,d={name:"App",components:{Banner:v}},p=d,h=(0,c.Z)(p,i,r,!1,null,null,null),m=h.exports,g=n(2631),_=function(){var t=this;t._self._c;return t._m(0)},b=[function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("About组件内容")])])}],w={name:"About",beforeRouteEnter(t,e,n){console.log("About---beforeRouteEnter的to、from:",t,e),t.meta.isAuth?"about"===localStorage.getItem("about")?n():alert("About页面使用组件内路由守卫: 值为about才有权限查看..."):n()},beforeRouteLeave(t,e,n){console.log("About---beforeRouteLeave的to、from",t,e),n()}},y=w,x=(0,c.Z)(y,_,b,!1,null,null,null),k=x.exports,S=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"News"}},[e("router-view",{staticClass:"router-view-container"})],1)],1)])},C=[],A={name:"Home"},P=A,Z=(0,c.Z)(P,S,C,!1,null,null,null),O=Z.exports,E=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity,fontSize:"18px",fontWeight:"bolder"}},[t._v("欢迎学习vue2.0")]),t._m(0),t._m(1),t._m(2)])},L=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],q={name:"News",data(){return{opacity:1}},activated(){this.timerId=setInterval((()=>{console.log("News路由组件激活了"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("News路由组件失活了"),clearInterval(this.timerId)}},j=q,N=(0,c.Z)(j,E,L,!1,null,null,null),$=N.exports,D=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"xiangqing",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),0),e("router-view"),e("hr"),e("button",{staticClass:"getstudent-container",on:{click:t.getStudents}},[t._v("获取本地server1的学生数据")]),t._l(t.personList,(function(n){return e("ul",{key:n.id},[e("li",[t._v(t._s(n.id.slice(0,5))+" - "+t._s(n.name))])])}))],2)},I=[],R=(n(560),n(3822)),T={name:"Message",computed:{...(0,R.rn)(["messageList","personList"])},methods:{...(0,R.nv)({getStudents:"addPersonServer"}),pushShow(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}},beforeDestroy(){console.log("Message路由组件即将被销毁了~")}},M=T,B=(0,c.Z)(M,D,I,!1,null,null,null),H=B.exports,z=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号: "+t._s(t.id))]),e("li",[t._v("消息标题: "+t._s(t.title))]),e("li",[t._v("a: "+t._s(t.a))]),e("li",[t._v("b: "+t._s(t.b))])])},J=[],F={name:"Detail",props:["id","title","a","b"],mounted(){console.log("999999",this.$route),console.log("888888",this.$router)}},V=F,W=(0,c.Z)(V,z,J,!1,null,null,null),G=W.exports;const K=new g.ZP({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{name:"zhuye",path:"/home",component:O,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:$,meta:{isAuth:!0,title:"新闻"},beforeEnter:(t,e,n)=>{console.log("独享路由守卫beforeEnter的to、from、next参数:",t,e,n),t.meta.isAuth?"news"===localStorage.getItem("news")?n():alert("News页面使用独享路由守卫: 值为news才有权限查看..."):n()}},{name:"xiaoxi",path:"message",component:H,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail",component:G,props(t){return{id:t.query.id,title:t.query.title,a:1,b:"hello"}},meta:{isAuth:!0,title:"详情"}}]}]}]});K.beforeEach(((t,e,n)=>{console.log("前置路由守卫beforeEach的to和from参数:",t,e),t.meta.isAuth?"global"===localStorage.getItem("global")?n():alert("全局前置路由守卫: 值为global才有权限查看..."):n()})),K.afterEach(((t,e)=>{console.log("后置路由守卫afterEach的to和from参数:",t,e),document.title=t.meta.title||"atJapan"}));var Q=K,U=n(691),X=n(1076);o.ZP.use(R.ZP);const Y={addPersonServer(t){X.Z.get("http://localhost:8081/atJapan/students").then((e=>{t.commit("ADD_PERSON",e.data)}),(t=>{alert(t.message)}))}},tt={ADD_PERSON(t,e){e.forEach((e=>{t.personList.some((t=>t.id===e.id))?alert(`重复的id: ${e.id}`):t.personList.unshift({id:e.id,name:e.name,age:e.age})}))}},et={messageList:[{id:(0,U.x0)(),title:"消息001"},{id:(0,U.x0)(),title:"消息002"},{id:(0,U.x0)(),title:"消息003"}],personList:[{id:(0,U.x0)(),name:"张三"}]},nt={};var ot=new R.ZP.Store({actions:Y,mutations:tt,state:et,getters:nt});o.ZP.config.productionTip=!1,o.ZP.use(g.ZP),new o.ZP({el:"#app",render:t=>t(m),router:Q,store:ot})}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],r=t[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(a=!1,r<s&&(s=r));if(a){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={826:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,s=o[0],a=o[1],l=o[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(e&&e(o);u<s.length;u++)r=s[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},o=self["webpackChunkvue2_test"]=self["webpackChunkvue2_test"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(329)}));o=n.O(o)})();
//# sourceMappingURL=index.61483a02.js.map