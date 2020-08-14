<template>
  <div :class="type">
    <template v-if="icon.length !== 0">
      <font-awesome-icon :icon="icon" :style="type=='info'?{color: '#028AC4'}:{}" />
    </template>

    <div class="message">
      <slot></slot>
    </div>
    <div class="close" @click="remove" v-if="close">
      <font-awesome-icon icon="times" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    instance: Object,
    type: String,
    close: Boolean,
  },
  methods: {
    remove: function () {
      this.$store.commit({
        type: "removeFromToastQueue",
        instance: this.instance,
      });
    },
  },

  computed: {
    icon: function () {
      switch (this.type) {
        case "info":
          return "info-circle";

        case "success":
          return "check-circle";

        case "error":
          return "times-circle";

        case "warn":
          return "exclamation-triangle";
        default:
          return "";
      }
    },
  },

  mounted: function () {
    if (!this.close) {
      setTimeout(() => {
        this.remove();
      }, 3000);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";

@mixin toast {
  @include pop;
  @include center-layout;
  align-items: flex-start;
  background-color: #ffffff;
  width: fit-content;
}

.message {
  padding: 0 20px;
  text-align: center;
  word-wrap: break-word;
  word-break: break-all;
}

.close {
  @include rt-close-btn;
}

.info,
.normal {
  @include toast;
}

.success {
  @include toast;
  color: #0f7955;
  background-color: #7cecb0;
}

.error {
  @include toast;
  background-color: #ec8d8d;
  color: #9b2d2d;
}

.warn {
  @include toast;
  background-color: #e0d646;
  color: #684c00;
}

@media screen and (max-width: 600px) {
  .toast {
    max-width: 70vw;
    .close {
      font-size: 23px;
    }
  }
}
</style>