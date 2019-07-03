<template>
    <div class="newsDetailContainer">
        <h3 class="title">{{newsInfo.title}}</h3>
        <div class="des">
            <span>发表时间:{{newsInfo.add_time|dateFormat}}</span>
            <span>点击:{{newsInfo.click}}次</span>
        </div>
        <hr>
        <div class="content" v-html="newsInfo.content"></div>
        <comment :id="id"></comment>
    </div>
</template>

<script>
    import comment from '../component/commnent.vue'

    export default {
        name: "newsDetail",
        data() {
            return {
                id: this.$route.params.id,
                newsInfo: {}
            }
        },
        created() {
            this.$http.getRequest("/getnew/" + this.id).then(res => {
                this.newsInfo = res.message[0];
            })
        },
        components: {
            comment: comment
        }
    }
</script>

<style scoped lang="less">
    .newsDetailContainer {
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
    }
</style>