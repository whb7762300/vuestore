<template>
    <div id="homenContainer">
        <banner :bannerList="bannerList" :isfull="true"></banner>
        <ul class="tab">
            <router-link tag="li" to="/newslist">
                <img src="../../images/menu1.png" alt="">
                <p>新闻资讯</p>
            </router-link>
            <router-link tag="li" to="/picturelist">
                <img src="../../images/menu2.png" alt="">
                <p>图片分享</p>
            </router-link>
            <router-link tag="li" to="/goodslist2">
                <img src="../../images/menu3.png" alt="">
                <p>商品购买</p>
            </router-link>
            <router-link tag="li" to="/goodslist">
                <img src="../../images/menu4.png" alt="">
                <p>浏览反馈</p>
            </router-link>
            <router-link tag="li" to="/newslist">
                <img src="../../images/menu5.png" alt="">
                <p>视频专区</p>
            </router-link>
            <router-link tag="li" to="/newslist">
                <img src="../../images/menu6.png" alt="">
                <p>联系我们</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import banner from '../component/banner.vue';

    export default {
        name: "home",
        data: () => {
            return {
                bannerList: []
            }
        },
        created() {
            this.getBannerList();
        },
        methods: {
            getBannerList() {
                this.$http.getRequest("/getlunbo").then((res) => {
                    this.bannerList = res.message;
                })
            }
        },
        components: {
            banner
        }
    };
</script>

<style scoped lang="less">


    .tab {
        display: flex;
        flex-wrap: wrap;
        background: white;

        li {
            padding-top: 10px;
            text-align: center;
            width: 25%;
            display: block;

            p {
                padding-top: 10px;
            }

            img {
                margin: 0 auto;
                height: 60px;
                width: 60px;
                display: block;
                background-position: center;
                background-size: cover;
            }
        }
    }


</style>