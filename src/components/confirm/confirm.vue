<template>
  <div class="confirm" v-if="isShow">
    <div class="message">
      <slot></slot>
    </div>
    <div class="group">
      <div class="cancel" @click="cancelDo();">{{cancel}}</div>
      <div class="ok" @click="okDo()">{{ok}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ok: {
      type: String,
      default: "確定",
    },
    cancel: {
      type: String,
      default: "取消",
    },
    okHandle: {
      type: Function,
      default: () => {},
    },
    cancelHandle: {
      type: Function,
      default: () => {},
    },
  },
  data: function () {
    return {
      icon: "",
      classObj: ["toast"],
      isShow: true,
    };
  },
  methods: {
    okDo: function () {
      this.isShow = false;
      this.okHandle();
      this.$store.commit("unlock");
      this.$store.commit("removeConfirm");
    },
    cancelDo: function () {
      this.isShow = false;
      this.cancelHandle();
      this.$store.commit("unlock");
      this.$store.commit("removeConfirm");
    },
  },
  mounted: function () {
    this.$store.commit("lock");
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";
@import "../../styles/helpers/variables.scss";

@mixin btn {
  cursor: pointer;
  bottom: 15px;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 12px;
}

.confirm {
  @include pop;
  @include center-layout;
  flex-direction: column;
  top: 0;
  background-color: #ffffff;

  .message {
    text-align: center;
    min-width: 300px;
    max-width: 500px;
    padding: 20px 20px;
    border-bottom: #cccccc 1px solid;
    word-wrap: break-word;
    word-break: break-all;
  }

  .group {
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    width: 100%;

    .ok {
      @include btn;
      left: 10px;
      background-color: #2d86b9;
      color: white;
    }
    .cancel {
      @include btn;
      right: 10px;
      background-color: #dfdfdf;
      color: #666666;
    }
  }
}
@media screen and (max-width: $md) {
  .ok,
  .cancel {
    margin: 0 5px;
  }
  .confirm {
    .message {
      min-width: 40vw;
      max-width: 50vw;
    }
  }
}
</style>