<template>
    <div class="goodsDetail">
        <div class="mui-card banner">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <banner :isfull="false" :bannerList="bannerList"></banner>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        <span>市场价:</span><span>¥1000</span><span>  销售价:</span><span>¥999</span>
                    </div>
                    <div class="count">
                        <span>购买数量:</span>
                        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="1"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'
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
        mounted() {
            mui('.mui-numbox').numbox();
        },
        components: {
            banner
        }
    }
</script>

<style scoped lang="less">

</style>