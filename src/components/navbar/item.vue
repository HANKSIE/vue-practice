<template>
  <div class="nav-item">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-item {
  padding: 20px 1.5vw;
  color: #ffffff;
  font-size: 15px;
  &:hover {
    background-color: #666666;
  }
}
@media screen and (max-width: 600px) {
  .nav-item {
    text-align: center;
    width: 60vw;
  }
}
</style>