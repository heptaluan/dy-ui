<template>
    <div 
        class="dy-collapse-item"
        :class="{'dy-collapse-item-active': this.isActive}"
    >
        <div class="dy-collapse-item-header" @click="toggle">
            <dy-icon class="dy-collapse-icon" size="18" type="&#xe6a7;"></dy-icon>
            <slot></slot>
        </div>
        <collapse-transition>
            <div class="dy-collapse-content" v-show="isActive">
                <div class="dy-collapse-content-box">
                    <slot name="content"></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>

<script>

    import CollapseTransition from './CollapseTransition';
    
    export default {
        name: 'dy-collapse-item',
        props: {
            name: String
        },
        components: {
            CollapseTransition
        },
        data() {
            return {
                index: 0,
                isActive: false
            }
        },
        methods: {
            toggle() {
                this.$parent.toggle({
                    name: this.name || this.index,
                    isActive: this.isActive
                })
            }
        }
    }
</script>