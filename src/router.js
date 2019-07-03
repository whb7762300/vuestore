import VueRouter from 'vue-router'

import main from './vue/main/mainContent.vue'
import home from './vue/main/home.vue'
import cart from './vue/main/cart.vue'
import member from './vue/main/member.vue'
import search from './vue/main/search.vue'
import newsList from './vue/news/newsList.vue'
import newsDetail from './vue/news/newsDetail.vue'
import pictureList from './vue/pictures/pictureList.vue'
import picDetail from './vue/pictures/pictureDetail.vue'
import goodsList from './vue/goods/goodsList.vue'

let vueRouter = new VueRouter({
    routes: [
        {path: '/', redirect: '/main/home'},//页面初始化时重定向值登录模块
        {
            path: '/main', component: main,
            children: [
                {
                    path: 'home', component: home
                },
                {
                    path: 'cart', component: cart
                },
                {
                    path: 'member', component: member
                },
                {
                    path: 'search', component: search
                }
            ]
        },
        {path: '/newslist', component: newsList},
        {path: '/newsdetail/:id', component: newsDetail},
        {path: '/picturelist', component: pictureList},
        {path: '/picdetail/:id', component: picDetail},
        {path: '/goodslist', component: goodsList},
    ],
    linkActiveClass: 'mui-active'
});
//不要忘记导出暴露
export default vueRouter;
