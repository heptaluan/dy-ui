<template>
    <div class="dy-badge">
        <slot></slot>
        <sup
            class="dy-badge-content"
            v-show="!hidden && (content || isDot)"
            v-text="content"
            :class="{'is-dot': isDot}"
        ></sup>
    </div>
</template>

<script>
    
    export default {
        name: 'dy-badge',
        props: {
            value: {},
            max: Number,
            hidden: Boolean,
            isDot: Boolean
        },
        computed: {
            content() {
                if (this.isDot) return;
                
                const value = this.value;
                const max = this.max;

                if (typeof value === 'number' && typeof max === 'number') {
                    return max < value ? `${max}+` : value
                }

                return value;
            }
        }
    }
</script>