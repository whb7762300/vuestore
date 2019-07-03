<template>
    <div>
        <nav class="mui-bar mui-bar-tab">
            <!--此处如果用router-link to 的方式会出现手机无法跳转的现象,或者pc页面刷新后也无法跳转的现象,原因暂时未知-->
            <router-link :class="['mui-tab-item',path ==='/main/home'?'mui-active':'']" to="/main/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link :class="['mui-tab-item',path ==='/main/member'?'mui-active':'']" to="/main/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link :class="['mui-tab-item',path ==='/main/cart'?'mui-active':'']" to="/main/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span
                        class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link :class="['mui-tab-item',path ==='/main/search'?'mui-active':'']" to="/main/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "bottomnav",
        data() {
            return {}
        },
        methods: {},
        created() {
        }
    }
</script>

<style scoped lang="less">

</style>