<template>
  <div class="dropdown">
    <slot name="btn" :handle="toggle"></slot>
    <div :class="`drop-list${isFixed?'-fixed':''}`" v-if="isShow">
      <slot name="items"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    isFixed: Boolean,
    resizeHandle: Function,
  },
  data: function () {
    return {
      isShow: false,
      listHeight: 0,
    };
  },
  methods: {
    toggle: function () {
      this.isShow = !this.isShow;
    },
  },
  mounted: function () {
    window.addEventListener("resize", () => {
      this.resizeHandle();
    });
  },
};
</script>

<style lang="scss" scoped>
@mixin list {
  z-index: 1;
  background-color: #444444;
  white-space: nowrap;
}

.dropdown {
  .drop-list {
    @include list;
    position: static;
  }
  .drop-list-fixed {
    @include list;
    position: fixed;
  }
}
</style>