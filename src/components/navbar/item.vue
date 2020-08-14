<template>
  <div class="nav-item">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../styles/helpers/variables.scss";
.nav-item {
  padding: 20px 1.5vw;
  color: #ffffff;
  text-align: center;
  font-size: 1.7vh;
  &:hover {
    background-color: #666666;
  }
}

@media screen and (max-width: $sm) {
  .nav-item {
    width: 60vw;
  }
}

@media screen and (max-width: $md) {
  .nav-item {
    width: 40vw;
  }
}
</style>
