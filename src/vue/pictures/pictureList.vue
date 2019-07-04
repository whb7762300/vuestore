<template>
    <div class="pictureListContainer">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0?'mui-active':'']"
                       v-for="item in categorys" :key="item.id" @tap="getPhotoList(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <ul class="photoList">
            <router-link tag="li" v-for="item in list" :to="'/picdetail/'+item.id">
                <img v-lazy="item.img_url" alt="">
                <div>
                    <p>{{ item.title }}</p>
                    <p class="mui-ellipsis-2">{{ item.zhaiyao }}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

    export default {
        name: "pictureList",
        data() {
            return {
                categorys: [],
                list: []
            }
        },
        mounted() {
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        created() {
            this.getCategory();
            this.getPhotoList(0);
        },
        methods: {
            getCategory() {
                this.$http.getRequest("/getimgcategory").then(res => {
                    res.message.unshift({title: "全部", id: 0});
                    this.categorys = res.message;
                })
            },
            getPhotoList(id) {
                this.$http.getRequest("/getimages/" + id).then(res => {
                    this.list = res.message;
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .pictureListContainer {
        padding-top: 40px;

        #slider {
            background: white;
            position: fixed;
            top: 40px;
            left: 0;
        }

        .photoList {
            padding: 0 10px;

            li {
                position: relative;
                margin-bottom: 10px;
                box-shadow: 0 0 8px #ccc;
                text-align: center;

                img {
                    width: 100%;

                    &[lazy=loading] {
                        width: 40px;
                        height: 300px;
                        margin: auto;
                    }
                }


                div {
                    max-height: 85px;
                    background-color: rgba(0, 0, 0, 0.4);;
                    position: absolute;
                    bottom: 0;

                    p {
                        width: 100%;
                        text-align: left;
                        color: white;
                        //最多显示一行
                        &:first-child {
                            font-size: 16px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis
                        }

                        //最多显示三行
                        /* &:last-child {
                             display: -webkit-box;
                             overflow: hidden;
                             white-space: normal !important;
                             text-overflow: ellipsis;
                             word-wrap: break-word;
                             -webkit-line-clamp: 3;
                             -webkit-box-orient: vertical
                         }*/
                    }
                }
            }
        }
    }
</style>