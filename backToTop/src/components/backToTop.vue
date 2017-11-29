<template>
    <div class="back-to-top" @click="backToTop" v-show="showReturnToTop">{{ content }}</div>
</template>

<script>
    import { scrollIt } from './scrollIt';

    export default {
        name: 'back-to-top',
        props: {
            pageY: {
                type: Number,
                default: 200
            },
            transitionName: {
                type: String,
                default: 'linear'
            }
        },
        data() {
            return {
                showReturnToTop: false,
                content: "Top"
            }
        },
        methods: {
            currentPageYOffset() {
                window.pageYOffset > this.pageY ? this.showReturnToTop = true : this.showReturnToTop = false;
            },
            backToTop() {
                scrollIt(0, 200, this.transitionName, this.currentPageYOffset);
            }
        },
        created() {
            window.addEventListener('scroll', this.currentPageYOffset);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.currentPageYOffset)
        }
    }
</script>

<style scoped lang="scss">
    .back-to-top {
        position: fixed;
        bottom: 5%;
        right: 50px;
        z-index: 9999;
        cursor: pointer;
        width: 30px;
        height: 30px;
        line-height: 30px;
        background-color: rgba(234, 231, 231, 0.52);
        color: #34495e;
        border-radius: 15px;
        font-size: 12px;
    }
</style>