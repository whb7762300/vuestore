<template>
    <div class="appContainer">
        <mt-header fixed title="黑马程序员·Vue项目">
            <span slot="left" v-show="flag">
        <mt-button icon="back" @tap.native="goBack">返回</mt-button>
            </span>
        </mt-header>
        <router-view>
        </router-view>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                flag: true
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        },
        created() {
            this.flag = !this.$route.path.includes("/main");
        },
        watch: {//通过监听域名的变化来实现返回按钮的显示与隐藏
            '$route.path': function (newVal, oldVal) {
                this.flag = !newVal.includes("/main")
            }
        }
    }
</script>
<style scoped lang="less">
    .appContainer {
        width: 100%;
        height: 100%;
        padding-top: 40px;
        overflow-x: hidden;

        .header {
            z-index: 10;
        }
    }
</style>