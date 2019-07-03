<template>
    <div class="newsContainer">
        <ul>
            <router-link tag="li" v-for="item in newsList" :key="item.id"
                         :to="'/newsdetail/' + item.id">
                <a href="#" class="clearFix">
                    <img :src="item.img_url" alt="">
                    <div>
                        <p>{{item.title}}</p>
                        <div>
                            <span>发表时间:{{item.add_time|dateFormat}}</span>
                            <span>点击:{{item.click}}次</span>
                        </div>
                    </div>

                </a>
                <p class="line"></p>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "newsList",
        data: () => {
            return {
                newsList: []
            }
        },
        created() {
            this.getNewsList();
        },
        methods: {
            getNewsList() {
                this.$http.getRequest("/getnewslist").then(res => {
                    this.newsList = res.message;
                    Toast('获取新闻列表成功');
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .newsContainer {
        ul {
            background: white;
            width: 100%;

            li {
                width: 100%;
                height: 67px;

                .line {
                    width: 100%;
                    margin-left: 15px;
                    background: #ccc;
                    height: 1px;
                }

                a {
                    padding: 8px;
                    display: block;

                    img {
                        width: 42px;
                        height: 42px;
                        float: left;
                        margin-right: 10px;
                    }

                    div {
                        overflow: hidden;

                        p {
                            margin-bottom: 5px;
                            color: black;
                        }

                        div {
                            display: flex;
                            justify-content: space-between;

                            span {
                                color: #226aff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>