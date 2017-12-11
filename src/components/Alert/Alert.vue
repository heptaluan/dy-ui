<template>
    <model v-bind="$props" :isShow.sync="syncSlot" ref="model">
        <model-header :closeBtn="fasle">
            {{ title }}
        </model-header>
        <model-body>
            <slot></slot>
        </model-body>
        <model-footer>
            
        </model-footer>
    </model>
</template>

<script>

    import { Button } from "../Button";
    import { Model, ModelHeader, ModelBody, ModelFooter } from "../Model";
    
    export default {
        name: "dy-model-header",
        props: {}
    }

</script>