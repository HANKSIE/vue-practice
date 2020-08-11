<template>
  <div>
    <NavBar>
      <template v-slot:logo>Hello</template>
      <template v-slot:items>
        <router-link to="/">
          <NavItem>首頁</NavItem>
        </router-link>
        <router-link to="/about">
          <NavItem>關於我們</NavItem>
        </router-link>
        <DropDown :isFixed="isFixedDrop" :resizeHandle="navDropResize">
          <template v-slot:btn="{handle}">
            <DropBtn :handle="handle">
              <NavItem>貼文</NavItem>
            </DropBtn>
          </template>
          <template v-slot:items>
            <DropItem>
              <NavItem>新增貼文</NavItem>
            </DropItem>
            <DropItem>
              <NavItem>瀏覽貼文</NavItem>
            </DropItem>
          </template>
        </DropDown>
        <router-link to="/contact">
          <NavItem>連絡我們</NavItem>
        </router-link>

        <DropDown :isFixed="isFixedDrop" :resizeHandle="navDropResize">
          <template v-slot:btn="{handle}">
            <DropBtn :handle="handle" :isFixed="true">
              <NavItem>106021014</NavItem>
            </DropBtn>
          </template>
          <template v-slot:items>
            <DropItem>
              <NavItem>設定</NavItem>
            </DropItem>
            <DropItem>
              <NavItem>貼文管理</NavItem>
            </DropItem>
            <DropItem>
              <NavItem>訂單查詢</NavItem>
            </DropItem>
            <DropItem>
              <NavItem>購物車</NavItem>
            </DropItem>
          </template>
        </DropDown>
      </template>
    </NavBar>

    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/navbar/bar";
import NavItem from "./components/navbar/item";
import DropDown from "./components/dropdown/dropdown";
import DropItem from "./components/dropdown/item";
import DropBtn from "./components/dropdown/button";

export default {
  data: function () {
    return {
      isFixedDrop: !window.matchMedia("(max-width: 600px)").matches,
    };
  },

  methods: {
    navDropResize: function () {
      this.isFixedDrop = !window.matchMedia("(max-width: 600px)").matches;
    },
  },

  components: { NavBar, NavItem, DropDown, DropItem, DropBtn },
};
</script>