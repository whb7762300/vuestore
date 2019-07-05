<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="count"
               @change="numberChange" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.js'

    export default {
        name: "numbox",
        data() {
            return {}
        },
        methods: {
            numberChange() {
                this.$store.commit("itemCountChanged", {
                    id: this.id,
                    count: this.$refs.numbox.value
                })
            }
        },
        created() {
        },
        mounted() {
            mui('.mui-numbox').numbox();
        },
        props: [
            "count", "id"
        ]
    }
</script>

<style scoped lang="less">

</style>