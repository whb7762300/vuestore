<template>
    <div class="goodsListContainer">
        <div id="refreshContainer" class="mui-content mui-scroll-wrapper">
            <div class="mui-scroll">
                <!--数据列表-->
                <ul>
                    <li v-for="(item,i) in goodsList" :key="item.id"
                        @tap="jumpToPage('/goodsdetail/'+item.id)">
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
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

    export default {
        name: "goodsList",
        data() {
            return {
                page: 1,
                goodsList: []
            }
        },
        methods: {
            jumpToPage(url) {
                this.$router.push(url);
            },
            getGoodsList() {
                this.$http.getRequest('/getgoods?pageindex=' + this.page).then(res => {
                    if (this.page == 1) {
                        this.goodsList = res.message;
                        //结束下拉刷新
                        mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
                        //重置上拉加载
                        mui('#refreshContainer').pullRefresh().refresh(true);
                    } else {
                        if (res.message.length == 0) {
                            //加载完新数据后，必须执行如下代码，true表示没有更多数据了：
                            mui('#refreshContainer').pullRefresh().endPullupToRefresh(true);
                        } else {
                            this.goodsList = this.goodsList.concat(res.message);
                            mui('#refreshContainer').pullRefresh().endPullupToRefresh();
                        }
                    }
                });
            }
        },
        created() {
            this.getGoodsList();
        },
        mounted() {
            let vm = this;
            mui.init({
                pullRefresh: {
                    container: "#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
                    down: {
                        callback: function () {
                            vm.page = 1;
                            vm.getGoodsList();
                        }
                    },
                    up: {
                        callback: function () {
                            vm.page++;
                            vm.getGoodsList();
                        }
                    }
                }
            });
        }
    };
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