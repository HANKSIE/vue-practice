<template>
  <div class="panel">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";
.panel {
  @include panel;
  z-index: 99;
  height: 100vh;
}
</style>