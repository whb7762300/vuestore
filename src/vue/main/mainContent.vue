<template>
    <div class="mainContainer">
        <transition>
            <router-view></router-view>
        </transition>
        <nav class="mui-bar mui-bar-tab">
            <!--此处如果用router-link to 的方式会出现手机无法跳转的现象,或者pc页面刷新后也无法跳转的现象,主要是vuerouter和mui有冲突
            所以用点击的方式来跳转,或者说自己写一个底部切换的控件样式,不要用mui的-->
            <a :class="['mui-tab-item',path==='/main/home'?'mui-active':'']"
               @tap="jumpToPage('/main/home')">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a :class="['mui-tab-item',path==='/main/member'?'mui-active':'']"
               @tap="jumpToPage('/main/member')">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <a :class="['mui-tab-item',path==='/main/cart'?'mui-active':'']"
               @tap="jumpToPage('/main/cart')">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span
                        class="mui-badge">{{$store.state.count}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a :class="['mui-tab-item',path==='/main/search'?'mui-active':'']"
               @tap="jumpToPage('/main/search')">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "mainContent",
        data() {
            return {
                path: this.$route.path
            }
        },
        created() {
            console.log(this.$route);
        }
        , methods: {
            jumpToPage(url) {
                this.$router.push(url);
            }
        }
    }
</script>

<style scoped lang="less">
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active, .v-leave-active {
        transition: all 0.3s linear;
    }

    .mainContainer {
        padding-bottom: 50px;
    }
</style>