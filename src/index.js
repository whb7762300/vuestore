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
const cartName = "cartLocal";
let cart = JSON.parse(localStorage.getItem(cartName) || "[]");
//创建vuex示例
let store = new Vuex.Store({
    state: {
        count: 1,
        cart: cart
    },
    mutations: {
        //vuex的所有方法中,第一个参数固定是state的
        increase(state, num) {
            state.count += num;
        },
        saveToLocal(state) {
            localStorage.setItem(cartName, JSON.stringify(state.cart));
        },
        addToCart(state, goodInfo) {
            let hasGood = false;
            state.cart.some(item => {
                if (item.id === goodInfo.id) {
                    item.count += parseInt(goodInfo.count);
                    hasGood = true;
                    return true;
                }
            });
            if (!hasGood) {
                state.cart.push(goodInfo);
            }
            this.commit('saveToLocal');
        },
        itemSelectedChanged(state, obj) {
            state.cart.some(item => {
                if (item.id === obj.id) {
                    item.selected = obj.selected;
                }
            });
            this.commit('saveToLocal');
        },
        itemCountChanged(state, obj) {
            state.cart.some(item => {
                if (item.id === obj.id) {
                    item.count = parseInt(obj.count);
                }
            });
            this.commit('saveToLocal');
        },
        itemDel(state, id) {
            state.cart.some((item, i) => {
                if (item.id == id) {
                    state.cart.splice(i, 1);
                    return true;
                }
            });
            this.commit('saveToLocal');
        }

    },
    getters: {
        getGoodsCount(state) {
            let sum = 0;
            state.cart.forEach(item => {
                sum += item.count;
            });
            return sum;
        },
        getItemCount(state) {
            let obj = {};
            state.cart.forEach(item => {
                obj[item.id] = item.count
            });
            return obj;
        },
        getItemSelected(state) {
            let obj = {};
            state.cart.forEach(item => {
                obj[item.id] = item.selected;
            });
            return obj;
        },
        getSelectedCount(state) {
            let count = 0;
            state.cart.forEach(item => {
                if (item.selected) {
                    count += item.count;
                }
            })
            return count;
        },
        getSelectedMoney(state) {
            let sum = 0;
            state.cart.forEach(item => {
                if (item.selected) {
                    sum += item.count * item.price;
                }
            });
            return sum;
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