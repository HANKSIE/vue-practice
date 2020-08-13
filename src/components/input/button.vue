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
    cornor: {
      type: String,
      default: "normal",
    },
  },
  data: function () {
    return {
      btnStyle: {},
      btnClass: ["btn"],
    };
  },
  created: function () {
    this.btnClass.push(this.type, this.cornor);
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";
@mixin btn-color($bg, $ft) {
  background-color: $bg;
  color: $ft;
  &:hover {
    background-color: darken($bg, 10);
  }
}

.btn {
  @include btn-init;
}

/*=== cornor ===*/
.rect {
  padding: 10px 30px;
}

.normal {
  border-radius: 10px;
  padding: 10px 30px;
}

.round {
  border-radius: 25px;
  padding: 10px 30px;
}

.circle {
  padding: 20px;
  border-radius: 100%;
}

/*=== type ===*/
.primary {
  @include btn-color(#2d86b9, #ffffff);
}

.secondary {
  @include btn-color(#868686, #ffffff);
}

.success {
  @include btn-color(#11be78, #ffffff);
}

.danger {
  @include btn-color(#e53838, #ffffff);
}

.info {
  @include btn-color(#2d86b9, #ffffff);
}
</style>
