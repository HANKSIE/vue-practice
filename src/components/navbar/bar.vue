<template>
  <div>
    <nav :class="`nav${isFixed ? '-fixed' : ''}`" ref="navbar">
      <div class="nav-logo">
        <slot name="logo"></slot>
      </div>
      <div class="nav-menu">
        <div class="nav-menu-btn" @click="isShow = !isShow">
          <font-awesome-icon icon="bars" />
        </div>
        <template v-if="isShow">
          <div class="nav-item-group">
            <slot name="items"></slot>
          </div>
        </template>
      </div>
    </nav>
    <div :style="fillStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    isFixed: {
      type: Boolean,
      default: false,
    },
  },

  data: function () {
    return {
      isShow: true,
      fillStyle: {},
    };
  },

  created: function () {
    window.addEventListener("resize", () => {
      this.isShow = window.matchMedia("(max-width: 600px)").matches
        ? this.isShow
        : true;
    });
  },

  mounted: function () {
    //position: fixed，產生填充div
    const { clientHeight, clientWidth } = this.$refs.navbar;
    this.fillStyle = { height: `${clientHeight}px`, width: `${clientWidth}px` };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";

@mixin element {
  padding: 20px 1.5vw;
  color: #ffffff;
  font-size: 15px;
}

.nav,
.nav-fixed {
  @include hr-layout;
  background-color: #444444;
  width: 100%;
  box-shadow: 0 3px 5px #cccccc;

  .nav-logo {
    @include element;
    flex-grow: 1;
  }

  .nav-menu {
    .nav-menu-btn {
      display: none;
      @include element;
      &:hover {
        background-color: #777777;
        cursor: pointer;
      }
    }
    .nav-item-group {
      @include hc-layout;
      .nav-item {
        @include element;
      }
    }
  }
}

.nav-fixed {
  position: fixed;
  top: 0;
}

@media screen and (max-width: 600px) {
  .nav,
  .nav-fixed {
    z-index: 50;
    .nav-menu {
      .nav-menu-btn {
        display: block;
        padding: 20px 5vw;
        color: #cccccc;

        &:hover {
          background-color: #888888;
          cursor: pointer;
        }
      }
      .nav-item-group {
        position: fixed;
        display: block;
        background-color: #444444;
        left: 0;
        top: 0;
        box-shadow: 0 3px 5px #cccccc;
        max-height: 100vh;
        min-height: 100vh;
        overflow-y: scroll;
      }
    }
  }
}
</style>
