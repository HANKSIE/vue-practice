<template>
  <button :class="btnClass" @click="handle">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    handle: {
      type: Function,
      default: () => {},
    },
    type: {
      type: String,
      default: "",
    },
  },
  data: function () {
    return {
      btnStyle: {},
      btnClass: ["btn"],
    };
  },
  created: function () {
    this.btnClass.push(this.type);
  },
};
</script>

<style lang="scss" scoped>
@mixin btn-color($bg, $ft) {
  background-color: $bg;
  color: $ft;
  &:hover {
    background-color: darken($bg, 10);
  }
}

@mixin decorate {
  border-radius: 5px;
  padding: 10px 20px;
}

.btn {
  outline: none;
  border: none;
}

.primary {
  @include btn-color(#2fb1e8, #ffffff);
  @include decorate;
}

.secondary {
  @include btn-color(#868686, #ffffff);
  @include decorate;
}

.success {
  @include btn-color(#11be78, #ffffff);
  @include decorate;
}

.danger {
  @include btn-color(#e53838, #ffffff);
  @include decorate;
}

.info {
  @include btn-color(#2d86b9, #ffffff);
  @include decorate;
}
</style>
