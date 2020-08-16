<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@import "../../styles/helpers/mixins.scss";
.page {
  @include center-layout;
  height: 100%;
  width: 100%;
}
</style>
