<template>
    <div class="newsDetailContainer">
        <h3 class="title">{{newsInfo.title}}</h3>
        <div class="des">
            <span>发表时间:{{newsInfo.add_time|dateFormat}}</span>
            <span>点击:{{newsInfo.click}}次</span>
        </div>
        <hr>
        <div class="content">
            <p>
                在SUV当道的天下，许多自主品牌相继推出了旗下多款SUV，想要在这个大市场划分一块田地。此次，作为多年生产硬派越野车的汽车企业猎豹汽车也紧随其后，即将推出量产SUV-猎豹CS10，这一越野车型会不会在市场上掀起波澜？又是否能真正帮助猎豹品牌在市场重塑地位？这一切我们不得而知，只能静静等待上海车展之后它的表现。无论怎样，先来看看这次小编抢先实拍到的量产猎豹CS10吧。
            </p>
            <p>
                <img class="imgborder" alt=""
                     src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2512412073,484693686&fm=26&gp=0.jpg"
                     border="1"/>
            </p>
            <p>
                <img class="imgborder" alt=""
                     src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2512412073,484693686&fm=26&gp=0.jpg"
                     border="1"/>
            </p>
            <p>
                <img class="imgborder" alt=""
                     src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2512412073,484693686&fm=26&gp=0.jpg"
                     border="1"/>
            </p>
        </div>
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
        .content{
            img{
                width: 100%;
               /* display: block;*/
            }
        }
    }
</style>