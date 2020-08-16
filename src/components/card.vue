<template>
  <div :class="direction">
    <div class="content">
      <div v-html="content"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: "v",
    },
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/helpers/mixins.scss";

.h {
  @include card;
  @include hc-layout;
}

.v {
  @include card;
  @include vc-layout;
}

.content {
  padding: 30px;
  @include vc-layout;
}
</style>
