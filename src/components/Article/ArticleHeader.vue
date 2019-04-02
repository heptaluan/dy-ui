<template>
  <div class="dy-article-header">
    <h2 class="dy-article-title">{{ title }}</h2>
    <div class="dy-article-sub-title">
      <span class="dy-article-meta" v-if="meta">{{ meta }}</span>
      <span class="dy-article-time" v-if="time">{{ time }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dy-article-header",
  props: {
    title: {
      type: String,
      required: true
    },
    meta: String,
    time: String
  }
};
</script>
