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
  min-height: 90vh;
  z-index: 55;
}

@media screen and (max-width: 600px) {
  .panel {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
}
</style>