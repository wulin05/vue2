// 该文件是整个项目的入口文件

//引入App.vue组件
import App from './App';

//创建vm
new Vue({
    el: '#root',
    template: `<App></App>`,
    components: {
        App
    }
});

