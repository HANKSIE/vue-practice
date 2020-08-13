<template>
  <div>
    <ConfirmPanel>
      <!-- <Confirm :okHandle="confirmOK" :cancelHandle="confirmCancel">confirm</Confirm> -->
    </ConfirmPanel>
    <Lock>
      <NavBar :isFixed="true">
        <template v-slot:logo>Hello</template>
        <template v-slot:items>
          <router-link to="/">
            <NavItem>首頁</NavItem>
          </router-link>
          <router-link to="/about">
            <NavItem>關於我們</NavItem>
          </router-link>
          <DropDown>
            <template v-slot:btn="{ handle }">
              <DropBtn :handle="handle">
                <NavItem>貼文</NavItem>
              </DropBtn>
            </template>
            <template v-slot:list="{isShow}">
              <DropList v-show="isShow" :style="dropListPos">
                <NavItem>新增貼文</NavItem>
                <NavItem>瀏覽貼文</NavItem>
              </DropList>
            </template>
          </DropDown>
          <router-link to="/contact">
            <NavItem>連絡我們</NavItem>
          </router-link>
          <router-link to="/login">
            <NavItem>登入</NavItem>
          </router-link>
          <DropDown>
            <template v-slot:btn="{ handle }">
              <DropBtn :handle="handle">
                <NavItem>106021014</NavItem>
              </DropBtn>
            </template>
            <template v-slot:list="{isShow}">
              <DropList v-show="isShow" :style="dropListPos">
                <NavItem>設定</NavItem>
                <NavItem>貼文管理</NavItem>
                <NavItem>訂單查詢</NavItem>
                <NavItem>購物車</NavItem>
              </DropList>
            </template>
          </DropDown>
        </template>
      </NavBar>

      <main class="main">
        <ToastPanel>
          <!-- <Toast>hi</Toast>
          <Toast :type="`info`" :close="true">info</Toast>
          <Toast :type="`success`">success</Toast>
          <Toast :type="`warn`">warn</Toast>
          <Toast :type="`error`" :close="true">error, and it can be closed</Toast>-->
        </ToastPanel>
        <router-view></router-view>
      </main>
      <Footer :style="{ height: '15vh' }">Copyright © 2020 BYJT</Footer>
    </Lock>
  </div>
</template>

<script>
import NavBar from "./components/navbar/bar";
import NavItem from "./components/navbar/item";
import DropDown from "./components/dropdown/dropdown";
import DropList from "./components/dropdown/list";
import DropBtn from "./components/dropdown/button";
import Toast from "./components/toast/toast";
import Confirm from "./components/confirm/confirm";
import ToastPanel from "./components/toast/panel";
import ConfirmPanel from "./components/confirm/panel";
import Lock from "./components/confirm/lock";
import Footer from "./components/footer";

export default {
  data: function () {
    return {
      dropListPos: { position: "absolute" },
    };
  },
  methods: {
    confirmOK: function () {
      console.log("ok");
    },
    confirmCancel: function () {
      alert("OMG");
    },
  },

  created: function () {
    window.addEventListener("resize", () => {
      this.dropListPos = window.matchMedia("(max-width: 600px)").matches
        ? { position: "static" }
        : { position: "absolute" };
    });
  },

  components: {
    NavBar,
    NavItem,
    DropDown,
    DropBtn,
    Toast,
    Confirm,
    ToastPanel,
    ConfirmPanel,
    Lock,
    Footer,
    DropList,
  },
};
</script>
<style lang="scss" scoped>
@import "./styles/helpers/mixins.scss";
.main {
  @include center-layout;
  width: 100%;
  height: 85vh;
}
</style>
