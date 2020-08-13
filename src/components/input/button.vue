<template>
  <button class="btn" @click="handle">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    handle: Function,
  },
};
</script>

<style lang="scss" scoped>
.button {
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
}
</style>
