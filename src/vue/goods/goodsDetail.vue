<template>
    <div class="goodsDetail">
        <banner :isfull="false" :bannerList="bannerList"></banner>
    </div>
</template>

<script>
    import banner from '../component/banner.vue';

    export default {
        name: "goodsDetal",
        data() {
            return {
                bannerList: []
            }
        },
        methods: {
            getBanner() {
                this.$http.getRequest("getthumimages/" + this.$route.params.id).then(res => {
                    res.message.forEach((item, i) => {
                        item.img = item.src;
                    });
                    this.bannerList = res.message;
                });
            }
        },
        created() {
            this.getBanner();
        },
        components: {
            banner
        }
    }
</script>

<style scoped lang="less">

</style>