<template>
  <div class="form">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";
@import "../../styles/helpers/variables.scss";
.form {
  @include vc-layout;
  padding: 30px;
  border-radius: 6px;
  box-shadow: 0 3px 7px #444444;
  background-color: #ffffff;
}

@media screen and (min-width: $lg) {
  .form {
    padding: 40px;
  }
}
</style>