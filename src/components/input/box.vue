<template>
  <input class="box" type="text" />
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  border: none;
  border-bottom: #666666 solid 2px;
  color: #666666;
  background-color: transparent;
  outline: none;
  margin: 5px 0;
  width: 200px;
  &:focus {
    border-color: #222222;
    caret-color: #222222;
    color: #222222;
  }
}
@media screen and (max-width: 380px) {
  .input-box {
    width: 60vw;
  }
}
</style>