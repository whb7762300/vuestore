<template>
    <div class="goodsListContainer">
        <!--下拉刷新容器-->
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"
                     :bottom-all-loaded="allLoaded" ref="loadmore" bottomPullText="上拉加载"
                     bottomDropText="释放加载">
            <!--数据列表-->
            <ul>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
                <li>
                    <p>内容</p>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>

    export default {
        name: "goodsList",
        data() {
            return {
                allLoaded: false
            }
        },
        methods: {
            loadTop() {

                this.$refs.loadmore.onTopLoaded();
            },
            loadBottom() {
                //this.allLoaded = true;// 若数据已全部获取完毕
                this.$refs.loadmore.onBottomLoaded();
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="less">
    .goodsListContainer {
        position: relative;
        height: 100%;

        ul {
            background: white;

            li {
                height: 80px;
            }
        }

    }
</style>