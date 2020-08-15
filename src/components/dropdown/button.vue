<template>
  <div class="drop-btn" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.drop-btn {
  cursor: pointer;
}
</style>