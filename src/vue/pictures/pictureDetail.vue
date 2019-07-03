<template>
    <div class="picDetail">
        <h3 class="title">{{info.title}}</h3>
        <div class="des">
            <span>发表时间:{{info.add_time|dateFormat}}</span>
            <span>点击:{{info.click}}次</span>
        </div>
        <hr>
        <div class="pictures">
            <div v-for="(item,index) in pics" :key="item.src">
                <img class="preview-img" :src="item.src" height="100"
                     @click="$preview.open(index, pics)" :key="item.src">
            </div>
        </div>
        <div class="content" v-html="info.content"></div>
        <comment :id="id"></comment>
    </div>
</template>

<script>
    import comment from '../component/commnent.vue';

    export default {
        name: "pictureDetail",
        data() {
            return {
                id: this.$route.params.id,
                info: {},
                pics: []
            }
        },
        methods: {
            getPicInfo() {
                this.$http.getRequest("getimageInfo/" + this.id).then(res => {
                    this.info = res.message[0];
                })
            },
            getPictures() {
                this.$http.getRequest("getthumimages/" + this.id).then(res => {
                    //补全宽高是为了凑合vue-preview画廊的数据格式
                    res.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                    });
                    this.pics = res.message;
                })
            }
        },
        created() {
            this.getPicInfo();
            this.getPictures();
        },
        mounted() {

        },
        components: {
            comment
        }
    }
</script>

<style scoped lang="less">
    .picDetail {
        padding: 5px;
        background: white;

        .title {
            font-size: 16px;
            text-align: center;
            color: red;
        }

        .des {
            margin: 10px 0;
            display: flex;
            justify-content: space-between;

            span {
                color: #226aff;
            }
        }

        .pictures {
            display: flex;
            flex-wrap: wrap;

            div {
                width: 33.33%;
                text-align: center;
                padding: 10px 0;

                img {
                    width: 100px;
                    height: 100px;
                }
            }

        }
    }
</style>