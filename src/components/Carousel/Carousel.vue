<template>
    <div 
        class="dy-carousel-box"
        ref="carouselBox"
        :style="{height: `${height}px`}"
        @mouseenter="mouseenterHandle"
        @mouseleave="mouseleaveHandle"
    >
        <ul class="dy-carousel">
            <slot></slot>
        </ul>
        <ul class="dy-carousel-nav" v-if="showCarouselButton">
            <li class="dy-carousel-prev">
                <a href="javascript:;" @click.prevent="prevHandle">
                    <dy-icon size="18" type="&#xe697;"></dy-icon>
                </a>
            </li>
            <li class="dy-carousel-next">
                <a href="javascript:;" @click.prevent="nextHandle">
                    <dy-icon size="18" type="&#xe6a7;"></dy-icon>
                </a>
            </li>
        </ul>
        <ul class="dy-carousel-control" v-show="showCarouselControl">
            <li v-for="list in lists" :key="list">
                <a 
                    href="javascript:;"
                    :class="{'dy-carousel-control-active': showIndex === list - 1 }"
                    @click.prevent="carouselControlHandle(list - 1)"
                >
                    {{ list }}
                </a>
            </li>
        </ul>
        
    </div>
</template>

<script>
    
    export default {
        name: "dy-carousel",
        data() {
            return {
                showIndex: this.activeIndex
            }
        },
        props: {
            activeIndex: {
                type: Number,
                default: 0
            },
            showCarouselButton: {
                type: Boolean,
                default: true
            },
            showCarouselControl: {
                type: Boolean,
                default: true
            },
            height: {
                type: Number,
                default: 300
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            playTime: {
                type: Number,
                default: 3000
            }
        },
        methods: {
            prevHandle() {
                if (this.showIndex <= 0) {
                    this.showIndex = this.items.length - 1;
                } else {
                    this.showIndex--;
                }
            },
            nextHandle() {
                if (this.showIndex >= this.items.length - 1) {
                    this.showIndex = 0;
                } else {
                    this.showIndex++;
                }
            },
            carouselControlHandle(index) {
                if (index !== this.showIndex) {
                    this.showIndex = index;
                }
            },
            move() {
                const { showIndex } = this;
                const { width } = this.$refs[`carouselBox`].getBoundingClientRect();

                if (this.items) {
                    this.items.forEach( (item, index) => {
                        let x = (index - showIndex) * width;
                        item.componentInstance.translateItemHandle(x);
                    })
                }
            },
            mouseenterHandle() {
                if (this.autoPlay) {
                    clearInterval(this.timer)
                }
            },
            mouseleaveHandle() {
                if (this.autoPlay) {
                    this.timer = setInterval(this.nextHandle, this.playTime)
                }
            }
        },
        watch: {
            showIndex() {
                this.move();
            }
        },
        computed: {
            lists() {
                let count = 0;
                this.items = [];

                // 根据图片数量来计算按钮个数
                this.$slots.default.forEach( (item) => {
                    if (item.componentOptions && item.componentOptions.tag === "dy-carousel-item") {
                        this.items.push(item);
                        count++;
                    }
                })

                return count;
            }
        },
        mounted() {
            // 开启
            this.move();
            if (this.autoPlay) {
                this.timer = setInterval(this.nextHandle, this.playTime)
            }
        },
        beforeDestroy() {
            if (this.autoPlay) {
                clearInterval(this.timer)
            }
        }
    }
</script>