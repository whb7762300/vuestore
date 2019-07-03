<template>
    <div class="appContainer">
        <mt-header fixed title="固定在顶部" class="header"></mt-header>
        <router-view>
        </router-view>
    </div>
</template>

<script>
    export default {
        name: "app",
        data: () => {
            return {}
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