<template>
  <div class="pop-window" v-if="isShow">
    <div class="content">
      <div v-html="content"></div>
      <slot></slot>
    </div>
    <span v-if="close" class="pop-window-close-btn" @click="$emit('click')">
      <font-awesome-icon icon="times" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: "",
    },
    close: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/helpers/mixins.scss";

.pop-window {
  background-color: #ffffff;
  @include pop;
  position: fixed;
  .pop-window-close-btn {
    @include rt-close-btn;
  }
  .content {
    padding: 15px;
  }
}
</style>
