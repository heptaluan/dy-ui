<template>
  <transition v-if="visible" :name="transition">
    <div 
      class="dy-sidebar"
      :class="{
        'dy-sidebar-right': this.placement === 'right',
        'dy-sidebar-active': this.visible
      }" 
      @click="clickHandle" 
      ref="container"
      :style="{ 'width': width + 'px' }"
    >
      <div class="dy-sidebar-inner">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>

  import Popup from "../../mixins/popup";
  
  export default {
    name: 'dy-sidebar',
    mixins: [Popup],
    data () {
      return {
        transition: 'sidebar-' + this.placement
      }
    },
    props: {
      placement: {
        type: String,
        default: 'left',
        validator (value) {
          return ['left', 'right'].includes(value)
        }
      },
      isShow: {
        type: Boolean,
        default: true
      },
      width: {
        type: [String, Number],
        default: 250
      }
    },
    watch: {
      isShow (val, oldVal) {
        if (val) {
          this.show()
        } else {
          this.hide()
        }
      }
    },
    updated () {
      if (this.visible) {
        this.$refs['container'].style.zIndex = this.getZIndex()
        setTimeout( () => {
          document.body.addEventListener('click', this.gloablClickHandle)
        })
      } else {
        document.body.removeEventListener('click', this.gloablClickHandle)
      }
    },
    methods: {
      clickHandle (e) {
        e.stopPropagation();
      },
      gloablClickHandle () {
        this.$emit('update:isShow', false)
      }
    },
    mounted () {
      document.body.appendChild(this.$el)
    }
  }
</script>