<template>
    <div class="mainContainer">
        <transition>
            <router-view></router-view>
        </transition>
       <!-- <nav class="mui-bar mui-bar-tab">
            &lt;!&ndash;此处如果用router-link to 的方式会出现手机无法跳转的现象,或者pc页面刷新后也无法跳转的现象,原因暂时未知&ndash;&gt;
            <router-link :class="['mui-tab-item',path ==='/main/home'?'mui-active':'']"
                         to="/main/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link :class="['mui-tab-item',path ==='/main/member'?'mui-active':'']"
                         to="/main/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link :class="['mui-tab-item',path ==='/main/cart'?'mui-active':'']"
                         to="/main/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span
                        class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link :class="['mui-tab-item',path ==='/main/search'?'mui-active':'']"
                         to="/main/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>-->
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
        },
        methods: {
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