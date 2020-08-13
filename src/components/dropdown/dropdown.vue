<template>
  <div class="dropdown">
    <slot name="btn" :handle="toggle"></slot>
    <slot name="list" :isShow="isShow"></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
  data: function () {
    return {
      isShow: false,
    };
  },
  methods: {
    toggle: function () {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
}
</style>
