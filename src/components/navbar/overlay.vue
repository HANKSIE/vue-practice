<template>
  <div :class="$store.state.isOverlay?'overlay':''">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";
.overlay {
  @include overlay;
  z-index: 95;
}
</style>
