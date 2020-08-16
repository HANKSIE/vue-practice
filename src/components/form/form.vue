<template>
  <form class="form" @submit.prevent="$emit('submit', $event)">
    <slot></slot>
  </form>
</template>
<script>
export default {};
</script>
>
<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";
@import "../../styles/helpers/variables.scss";
.form {
  @include vc-layout;
  @include card;
  padding: 30px;
}

@media screen and (min-width: $lg) {
  .form {
    padding: 40px;
  }
}
</style>
