<template>
    <div class="dy-progress">
        <div class="dy-progress-box" :class="computedClass">
            <div class="dy-progress-wrapper">
                <div class="dy-progress-bar" :class="chooseProgressColor(color)" :style="{ width: progress + '%' }">
                    <span class="dy-progress-text-inside" v-if="showProgressText && textInside">{{ progress }}%</span>
                </div>
            </div>
        </div>
        <div class="dy-progress-text-outside" v-if="showProgressText && !textInside">{{ progress }}%</div>
    </div>
</template>

<script>
    
    export default {
        name: "dy-progress",
        props: {
            progress: {
                type: Number,
                required: true
            },
            showProgressText: {
                type: Boolean,
                default: true
            },
            textInside: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                validator(color) {
                    return [
                        "default",
                        "success",
                        "waring",
                        "danger"
                    ].includes(color);
                }
            },
            striped: {
                type: Boolean,
                default: false
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            chooseProgressColor(color) {
                if (color) {
                    return ` dy-progress-bar-${color}`;
                }
            } 
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.textInside) {
                    classes.push("dy-progress-inside")
                }

                if (this.striped) {
                    classes.push("dy-progress-striped")
                }

                if (this.active) {
                    classes.push("dy-progress-active")
                }

                return classes.join(" ")
            }
        }
    }
</script>