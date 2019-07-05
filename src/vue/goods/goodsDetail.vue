<template>
    <div class="goodsDetail">
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
            <div id="ball" ref="ball" v-show="flag"></div>
        </transition>
        <div class="mui-card banner">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <banner :isfull="false" :bannerList="bannerList"></banner>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">{{goodInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        <span>市场价：</span><span>¥{{goodInfo.market_price}}</span><span>  销售价：</span><span>¥{{goodInfo.sell_price}}</span>
                    </div>
                    <div class="count">
                        <span>购买数量：</span>
                        <div class="mui-numbox" data-numbox-min='1'>
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="1"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                    <div class="btngroup">
                        <mt-button type="primary" size="small">立即购买
                        </mt-button>
                        <mt-button type="danger" size="small" @tap.native="addTocart">加入购物车
                        </mt-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content ">
                <div class="mui-card-content-inner des">
                    <p>商品货号：{{goodInfo.goods_no}}</p>
                    <p>库存情况：{{goodInfo.stock_quantity}}</p>
                    <p>上架时间：{{goodInfo.add_time|dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer other">
                <mt-button type="primary" size="large" plain @tap.native="jumpToDes">图文介绍
                </mt-button>
                <mt-button class="btnComment" type="danger" size="large" plain
                           @tap.native="jumpToComment">
                    商品评论
                </mt-button>
            </div>
        </div>

        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item"
               @tap="jumpToPage('/main/cart')">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge" id="badge"
                          ref="badge">{{$store.getters.getGoodsCount}}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </a>
        </nav>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'
    import banner from '../component/banner.vue';

    export default {
        name: "goodsDetal",
        data() {
            return {
                flag: false,
                bannerList: [],
                goodInfo: {}
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
            },
            getGoodsInfo() {
                this.$http.getRequest("goods/getinfo/" + this.$route.params.id).then(res => {
                    console.log(res.message);
                    this.goodInfo = res.message[0];
                    mui(".mui-numbox")
                        .numbox()
                        .setOption("max", parseInt(this.goodInfo.stock_quantity));
                })
            },
            jumpToComment() {
                this.$router.push("/goodscomment/" + this.$route.params.id);
            },
            jumpToDes() {
                this.$router.push("/goodsdes/" + this.$route.params.id);
            },
            jumpToPage(url) {
                this.$router.push(url);
            },
            addTocart() {
                this.flag = !this.flag;
                let num = mui('.mui-numbox').numbox().getValue();
                let info = {};
                info.id = parseInt(this.goodInfo.id);
                info.price = this.goodInfo.sell_price;
                info.count = num;
                info.selected = true;
                this.$store.commit('addToCart', info);
            },
            beforeEnter(el) {//el表示原生的dom对象
                el.style.transform = 'translate(0,0)';

            },
            enter(el, done) {//done是方法,指代afterEnter方法
                // 这句话，没有实际的作用，但是，如果不写，出不来动画效果；
                // 可以认为 el.offsetWidth 会强制动画刷新
                el.offsetWidth;
                //分析可知,获取小球和badge在屏幕上的位置,计算出距离差,即为移动的距离
                const ballRect = this.$refs.ball.getBoundingClientRect();
                const badgeRect = this.$refs.badge.getBoundingClientRect();
                const delX = badgeRect.left - ballRect.left;
                const delY = badgeRect.top - ballRect.top;
                el.style.transform = `translate(${delX}px,${delY}px)`;
                el.style.transition = 'all 0.8s cubic-bezier(.4,-0.3,1,.68)';
                done();
            }
            ,
            afterEnter(el) {
                this.flag = !this.flag;
            }
        },
        created() {
            this.getBanner();
            this.getGoodsInfo();
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
    .goodsDetail {
        position: relative;
        padding-bottom: 50px;

        #ball {
            position: absolute;
            top: 340px;
            z-index: 100;
            left: 150px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
        }

        .price {
            margin-bottom: 10px;
            color: #8f8f94;
            font-size: 14px;

            span {
                &:nth-of-type(2) {
                    text-decoration: line-through;
                    margin-right: 8px;
                }

                &:last-of-type {
                    font-size: 16px;
                    color: red;
                    font-weight: bold;
                }
            }
        }

        .btngroup {
            margin-top: 10px;
        }

        .des {
            p {
                font-size: 14px;
                margin-bottom: 5px;
            }
        }

        .other {
            display: block;

            .btnComment {
                margin-top: 10px;
            }
        }
    }
</style>