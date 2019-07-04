<template>
    <div class="goodsDes">
        <h3 class="title">{{goodsDes.title}}</h3>
        <hr>
        <div class="content" v-html="goodsDes.content"></div>
    </div>
</template>

<script>
    export default {
        name: "goodsDes",
        data() {
            return {
                id: this.$route.params.id,
                goodsDes: {}
            }
        },
        methods: {
            getDes() {
                this.$http.getRequest("goods/getdesc/" + this.id).then(res => {
                    this.goodsDes = res.message[0];
                    console.log(res.message);
                })
            }
        },
        created() {
            this.getDes();
        }
    }
</script>
<!--要图片的width:100%生效,需将scoped去掉-->
<style lang="less">
    .goodsDes {
        padding: 5px;

        .title {
            text-align: center;
            font-size: 16px;
            margin: 10px 0;
            color: blue;
        }

        .content {
            img {
                display: block;
                width: 100%;
            }

        }
    }
</style>