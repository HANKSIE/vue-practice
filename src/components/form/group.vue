<template>
  <div class="group">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";
@import "../../styles/helpers/variables.scss";

.group {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

@media screen and (min-width: $lg) {
  .group {
    padding: 20px;
  }
}
</style>