<template>
  <div :class="$store.state.isLock ? `lock` : ``">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lock {
  pointer-events: none;
  background-color: rgba(#aaaaaa, 0.5);
  opacity: 0.5;
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 50;
}
</style>
