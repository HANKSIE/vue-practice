<template>
  <div :class="classObj" v-if="isShow">
    <template v-if="type.length !== 0">
      <font-awesome-icon :icon="icon" :style="type=='info'?{color: '#028AC4'}:{}" />
    </template>

    <div class="message">
      <slot></slot>
    </div>
    <template v-if="close">
      <div class="close" @click="isShow = false">
        <font-awesome-icon icon="times" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
    close: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      icon: "",
      classObj: ["toast"],
      isShow: true,
    };
  },
  created: function () {
    this.icon = (() => {
      switch (this.type) {
        case "info":
          return "info-circle";
        case "success":
          return "check-circle";

        case "error":
          return "times-circle";

        case "warn":
          return "exclamation-triangle";
      }
    })();

    this.classObj.push(this.type);
  },
  mounted: function () {
    if (!this.close) {
      setTimeout(() => {
        this.isShow = false;
      }, 3000);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";

.toast {
  @include pop;
  @include center-layout;
  align-items: flex-start;
  background-color: #ffffff;
  width: fit-content;

  .message {
    padding: 0 20px;
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
  }

  .close {
    @include rt-close-btn;
  }
}

.success {
  color: #0f7955;
  background-color: #7cecb0;
}

.error {
  background-color: #ec8d8d;
  color: #9b2d2d;
}

.warn {
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