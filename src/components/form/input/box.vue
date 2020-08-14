<template>
  <input
    type="text"
    :class="boxType"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    boxType: {
      type: String,
      default: "underline",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/helpers/variables.scss";

@mixin box-base {
  border: none;
  outline: none;
  width: 200px;
  height: 30px;
}

.underline {
  @include box-base;
  border-bottom: #666666 solid 2px;
  color: #666666;

  &:focus {
    border-color: #222222;
    color: #222222;
  }
}

.rounded {
  @include box-base;
  border: #666666 solid 2px;
  color: #666666;
  border-radius: 5px;
  &:focus {
    border-color: #2d86b9;
    color: #222222;
  }
}

@media screen and (max-width: $sm) {
  .underline,
  .rounded {
    width: 50vw;
  }
}
</style>
