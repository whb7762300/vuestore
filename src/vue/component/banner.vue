<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in bannerList" :key="item.id">
            <img :class="['bannerImg',isfull?'isfull':'']" :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        name: "banner",
        data() {
            return {}
        },
        created() {
        },
        methods: {},
        props: ["bannerList", "isfull"]
    }
</script>

<style scoped lang="less">
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            text-align: center;

            .bannerImg {
                display: block;
                height: 100%;
                margin: 0 auto;
            }
        }

    }

    .isfull {
        width: 100%;
    }
</style>