<template>
  <div class="drop-btn" @click="handle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    handle: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.drop-btn {
  cursor: pointer;
}
</style>