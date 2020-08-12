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
    isFixed: {
      type: Boolean,
      default: false,
    },
    createdHandle: {
      type: Function,
      default: () => {},
    },
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
  created: function () {
    this.createdHandle();
  },
};
</script>

<style lang="scss" scoped>
@mixin list {
  z-index: 1;
  background-color: #444444;
  white-space: nowrap;
  min-width: 100%;
  right: 0;
}

.dropdown {
  position: relative;
  .drop-list {
    @include list;
    position: static;
  }
  .drop-list-fixed {
    @include list;
    position: absolute;
  }
}
</style>