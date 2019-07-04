<template>
    <div class="cartContainer">
        <div class="mui-card banner">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch></mt-switch>
                    <img src="../../images/menu1.png" class="icon" alt="">
                    <div>
                        <h3 class="mui-ellipsis-2">我是华为手机我是华为手机我是华为手机我是华为手机</h3>
                        <span class="price">¥1200</span>
                        <div class="mui-numbox" data-numbox-min='1'>
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="1"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                        <a href="javascript:;" class="del">删除</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cart",
        data() {
            return {}
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