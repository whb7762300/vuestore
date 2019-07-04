<template>
    <div>
        <commtent :id="id"></commtent>
    </div>
</template>

<script>
    import commtent from '../component/commnent.vue';

    export default {
        name: "goodsDes",
        data() {
            return {
                id: this.$route.params.id
            }
        },
        methods: {},
        created() {
        },
        components: {
            commtent
        }
    }
</script>

<style scoped lang="less">

</style>