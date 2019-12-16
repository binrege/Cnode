<template>
    <div>
       <div v-html="item.content"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                item:{}
            }
        },
        props: {},
        components: {},
        methods: {},
        mounted() {
            this.item=this.$route.params.item
        },
        watch: {},
        computed: {}
    }
</script>

<style scoped="scoped" lang='scss'></style>