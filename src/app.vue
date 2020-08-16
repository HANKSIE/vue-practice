<template>
  <div>
    <ConfirmPanel v-if="$store.state.confirm !== null">
      <Confirm
        :okHandle="$store.state.confirm.okHandle"
        :cancelHandle="$store.state.confirm.cancelHandle"
        >{{ $store.state.confirm.message }}</Confirm
      >
    </ConfirmPanel>
    <Lock>
      <NavBar :isFixed="true">
        <template v-slot:logo>BJ</template>
        <template v-slot:items>
          <router-link to="/">
            <NavItem>首頁</NavItem>
          </router-link>
          <router-link to="/about">
            <NavItem>關於我們</NavItem>
          </router-link>
          <DropDown>
            <template v-slot:btn="{ handle }">
              <DropBtn @click="handle">
                <NavItem>貼文</NavItem>
              </DropBtn>
            </template>
            <template v-slot:list="{ isShow }">
              <DropList v-show="isShow" :style="dropListStyle">
                <DropBtn>
                  <NavItem>新增貼文</NavItem>
                </DropBtn>
                <DropBtn>
                  <NavItem>瀏覽貼文</NavItem>
                </DropBtn>
              </DropList>
            </template>
          </DropDown>
          <router-link to="/contact">
            <NavItem>連絡我們</NavItem>
          </router-link>
          <router-link to="/store">
            <NavItem>商城</NavItem>
          </router-link>
          <template v-if="$store.state.auth === null">
            <router-link to="/login">
              <NavItem>登入</NavItem>
            </router-link>
          </template>

          <template v-if="$store.state.auth !== null">
            <DropDown>
              <template v-slot:btn="{ handle }">
                <DropBtn @click="handle">
                  <NavItem>{{ $store.state.auth.name }}</NavItem>
                </DropBtn>
              </template>
              <template v-slot:list="{ isShow }">
                <DropList v-show="isShow" :style="dropListStyle">
                  <DropBtn>
                    <router-link to="/user/profile">
                      <NavItem>設定</NavItem>
                    </router-link>
                  </DropBtn>
                  <DropBtn>
                    <NavItem>貼文管理</NavItem>
                  </DropBtn>
                  <DropBtn>
                    <NavItem>訂單查詢</NavItem>
                  </DropBtn>
                  <DropBtn>
                    <NavItem>購物車</NavItem>
                  </DropBtn>
                  <DropBtn @click="logout">
                    <NavItem>
                      登出
                    </NavItem>
                  </DropBtn>
                </DropList>
              </template>
            </DropDown>
          </template>
        </template>
      </NavBar>
      <NavOverlay>
        <main class="main">
          <ToastPanel>
            <Toast
              v-for="toast in $store.state.toastQueue"
              :key="$uuid.v4()"
              :type="toast.type"
              :close="toast.close"
              :instance="toast"
              >{{ toast.message }}</Toast
            >
          </ToastPanel>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </main>
        <Footer :style="{ height: '15vh' }">Copyright © 2020 BYJT</Footer>
      </NavOverlay>
    </Lock>
  </div>
</template>

<script>
import NavBar from "./components/navbar/bar";
import NavItem from "./components/navbar/item";
import NavOverlay from "./components/navbar/overlay";
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
  data: function() {
    return {
      dropListStyle: this.getDropListStyle(),
      metatag: {},
    };
  },
  methods: {
    confirmOK: function() {
      console.log("ok");
    },
    confirmCancel: function() {
      alert("OMG");
    },
    getDropListStyle: function() {
      return window.matchMedia("(max-width: 600px)").matches
        ? {
            position: "static",
          }
        : {
            position: "absolute",
          };
    },
    logout: function() {
      this.$http({
        method: "get",
        url: "logout",
        params: {},
      })
        .then((res) => {
          this.$toast.launch({
            message: res.data.message,
          });
          if (res.data.isSuccess) {
            this.$store.commit("logout");
            //該頁需權限才跳轉到login頁面
            if (this.$router.currentRoute.meta.requireAuth) {
              this.$router.push("/login");
            }
          }
        })
        .catch((err) => {
          console.error(err);
          this.$toast.launch({
            message: "登出失敗",
            type: "error",
          });
        });
    },
  },

  created: function() {
    window.addEventListener("resize", () => {
      this.dropListStyle = this.getDropListStyle();
    });
    this.$http({
      method: "get",
      url: "basedata/metatag",
      params: {},
    })
      .then((res) => {
        this.metatag = res.data.metatag;
      })
      .catch((err) => {
        console.error(err);
        this.$toast.launch({
          message: "無法取得meta tag",
          type: "error",
        });
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
    NavOverlay,
  },

  metaInfo: function() {
    return {
      meta: [
        { name: "keywords", content: this.metatag.keywords },
        { name: "description", content: this.metatag.description },
      ],
      titleTemplate: this.metatag.title,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./styles/helpers/mixins.scss";
.main {
  @include center-layout;
  width: 100%;
  min-height: 85vh;
  background-color: #ffffff;
}
</style>
