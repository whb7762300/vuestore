import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
//注意一下用法
import http from './js/httpRequest.js'

Vue.prototype.$http = http;
//Vue.prototype.$http = http;

Vue.use(VueRouter);
Vue.use(Mint);
import VuePreview from 'vue-preview'

Vue.use(VuePreview);
import Vuex from 'vuex'

Vue.use(Vuex);


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


import './css/common.css'
import appVue from './app.vue'
import router from './router'

//定义时间转换过滤器
Vue.filter('dateFormat', function (data, pattern = '') {
    let date = new Date(data);
    let year = date.getFullYear();
    //两位不足则补0
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    if (pattern == 'yyyy-mm-dd') {
        return `${year}-${month}-${day}`;
    } else {
        var hh = date.getHours().toString().padStart(2, '0')
        var mm = date.getMinutes().toString().padStart(2, '0')
        var ss = date.getSeconds().toString().padStart(2, '0')
        return `${year}-${month}-${day} ${hh}:${mm}:${ss}`
    }
});

//创建vuex示例
let store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        //vuex的所有方法中,第一个参数固定是state的
        increase(state, num) {
            state.count += num;
        }
    }
});

let vm = new Vue({
    el: "#app",
    data: {
        msg: "我是组件的数据"
    },
    methods: {},
    //使用.vue文件只能通过render方式渲染组件
    render: function (creat) {
        return creat(appVue);
    },
    router: router,
    //挂在到vue上
    store
});