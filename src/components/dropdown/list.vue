<template>
  <div class="drop-list">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.drop-list {
  z-index: 1;
  background-color: #444444;
  white-space: nowrap;
  min-width: 100%;
  right: 0;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  margin-top: 2px;
  position: absolute;
}
</style>