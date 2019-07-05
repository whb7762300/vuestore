<template>
    <div class="cartContainer">
        <div class="mui-card" v-for="(item,i) in cartList">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getItemSelected[item.id]"
                               @change="selectedChange(item.id,$store.getters.getItemSelected[item.id])"></mt-switch>
                    <img :src="item.thumb_path" class="icon" alt="">
                    <div>
                        <h3 class="mui-ellipsis-2">{{item.title}}</h3>
                        <span class="price">¥{{item.sell_price}}</span>
                        <numbox :count="$store.getters.getItemCount[item.id]"
                                :id="item.id"></numbox>
                        <a href="javascript:;" class="del" @tap="del(item.id,i)">删除</a>
                    </div>
                </div>
            </div>
        </div>
        <p>已选数量:{{$store.getters.getSelectedCount}}</p>
        <p>已选总价:{{$store.getters.getSelectedMoney}}</p>
    </div>
</template>

<script>
    //TODO
    //numbox如果不用组件的形式,会导致初始化无效,无法+-的问题
    import numbox from '../component/numbox.vue';

    export default {
        name: "cart",
        data() {
            return {
                cartList: []
            }
        },
        mounted() {
        },
        created() {
            this.getCartList();
        },
        methods: {
            getCartList() {
                let arr = [];
                this.$store.state.cart.forEach(item => {
                    arr.push(item.id);
                });
                let ids = arr.join(',');
                this.$http.getRequest("goods/getshopcarlist/" + ids).then(res => {
                    this.cartList = res.message;
                });
            },
            selectedChange(id, selected) {
                this.$store.commit("itemSelectedChanged", {
                    id: id,
                    selected: selected
                })
            },
            del(id, index) {
                this.cartList.splice(index, 1);
                this.$store.commit("itemDel", id);
            }
        },
        components: {
            numbox
        }
    }
</script>

<style scoped lang="less">
    .cartContainer {
        .mui-card-content-inner {
            display: flex;

            .icon {
                width: 60px;
                height: 60px;
                margin: 0 10px;
                display: block;
            }

            div {
                h3 {
                    height: 28px;
                    font-size: 13px;
                }

                .price {
                    font-size: 14px;
                    color: red;
                    font-weight: bold;
                }

                .mui-numbox {
                    height: 25px;
                }

                .del {
                    color: #007aff;
                }
            }
        }
    }
</style>