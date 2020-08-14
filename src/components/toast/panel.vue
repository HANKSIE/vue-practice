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
@import "../../styles/helpers/variables.scss";
.panel {
  @include panel;
  min-height: 90vh;
  z-index: 97;
}

@media screen and (max-width: $md) {
  .panel {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
}
</style>