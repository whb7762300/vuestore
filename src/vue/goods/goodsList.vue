<template>
    <div class="goodsListContainer">
        <!--下拉刷新容器-->
        <mt-loadmore class="refresh" :top-method="loadTop" :bottom-method="loadBottom"
                     :bottom-all-loaded="allLoaded" ref="loadmore" bottomPullText="上拉加载"
                     bottomDropText="释放加载" :auto-fill="false">
            <!--数据列表-->
            <ul>
                <router-link tag="li" v-for="(item,i) in goodsList" :key="item.id"
                             :to="'/goodsdetail/'+item.id">
                    <img :src="item.img_url" alt="">
                    <p class="mui-ellipsis-2 title">{{item.title}}</p>
                    <div class="content">
                        <div class="price">
                            <span>¥{{item.sell_price}}</span>
                            <span>¥{{item.market_price}}</span>
                        </div>
                        <div class="des">
                            <span>热卖中</span>
                            <span>剩{{item.stock_quantity}}件</span>
                        </div>
                    </div>
                </router-link>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>

    export default {
        name: "goodsList",
        data() {
            return {
                page: 1,
                allLoaded: false,
                goodsList: []
            }
        },
        methods: {
            loadTop() {
                this.page = 1;
                this.getGoodsList();
            },
            loadBottom() {
                this.page++;
                this.getGoodsList();
            },
            getGoodsList() {
                this.$http.getRequest('/getgoods?pageindex=' + this.page).then(res => {
                    if (this.page == 1) {
                        this.goodsList = res.message;
                        this.allLoaded = false;
                        this.$refs.loadmore.onTopLoaded();
                    } else {
                        this.goodsList = this.goodsList.concat(res.message);
                        this.$refs.loadmore.onBottomLoaded();
                        if (res.message.length == 0) {
                            this.allLoaded = true;
                        }
                    }
                });
            }
        },
        created() {
            this.getGoodsList();
        }
    }
</script>

<style scoped lang="less">
    .goodsListContainer {
        position: relative;
        height: 100%;
        //不要设置这个属性,会导致无法滑动的怪现象
        /*.refresh {
            height: 100%;

            .mint-loadmore-content {
                height: 100%;
            }*/

        ul {
            width: 100%;
            padding: 5px;
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            justify-content: space-between;

            li {
                border: 1px solid #ccc;
                box-shadow: 0 0 8px #ccc;
                background: white;
                width: 49%;
                display: block;
                margin-bottom: 5px;

                .title {
                    height: 42px;
                    font-size: 14px;
                    color: black;
                    font-weight: bold;
                }

                .content {
                    padding: 0 5px;
                    background: #ccc;

                    .des {
                        padding-bottom: 5px;
                        display: flex;
                        justify-content: space-between;
                    }

                    .price {
                        padding: 10px 0;

                        span {
                            &:first-child {
                                color: red;
                                font-size: 16px;
                            }

                            &:last-child {
                                color: #8f8f94;
                                font-size: 12px;
                                margin-left: 10px;
                                text-decoration: line-through;
                            }
                        }
                    }
                }

                img {
                    width: 100%;
                    min-height: 50px;
                }
            }
        }
    }
</style>