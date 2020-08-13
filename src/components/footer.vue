<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../styles/helpers/mixins.scss";
.footer {
  @include vc-layout;
  width: 100%;
  color: #ffffff;
  background-color: #444444;
}
</style>
