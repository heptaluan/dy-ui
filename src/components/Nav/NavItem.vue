<template>
    <li
        class="dy-nav-item"
        :class="{ 'dy-nav-active': active}"
    >
        <router-link v-if="link && router" :to="link">
            <slot></slot>
        </router-link>
        <a class="dy-nav-a" :href="link" v-if="link && !router">
            <slot></slot>
        </a>
        <slot v-if="!link"></slot>
    </li>
</template>

<script>
    
    export default {
        name: "dy-nav-item",
        props: {
            active: {
                type: Boolean,
                default: false
            },
            router: {
                type: Boolean,
                default: true
            },
            to: {
                validator(val) {
                    return (typeof val === "string") || (toString.call(val) === "[object, object]" && val.path)
                }
            }
        },
        computed: {
            link() {
                if (typeof this.to === "string") {
                    return this.to;
                } else if (toString.call(this.to) === "[object, object]") {
                    let link = this.to.path;

                    if (this.to.params) {
                        for (let param in this.to.params) {
                            link += `/${this.to.params[param]}`
                        }
                    }

                    if (this.to.query) {
                        let querys = [];
                        for (let property in this.to.querys) {
                            querys.push(property + "=" + this.to.query[property])
                        }
                        link += `?${querys.join("&")}`
                    }

                    return link;
                } else {
                    return false;
                }
            }
        }
    }
</script>
