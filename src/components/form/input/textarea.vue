<template>
  <textarea
    :class="boxType"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    boxType: {
      type: String,
      default: "textarea",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/helpers/variables.scss";
.textarea {
  border: #666666 solid 2px;
  color: #666666;
  border-radius: 5px;
  resize: none;
  padding: 5px;
  width: 200px;
  height: 100px;
  &:focus {
    border-color: #2d86b9;
    color: #222222;
  }
}

@media screen and (max-width: $sm) {
  .textarea {
    width: 50vw;
  }
}
</style>
