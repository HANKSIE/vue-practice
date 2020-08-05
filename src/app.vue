<template>
  <!-- <div :style="{fontSize: fs+'px'}">
    <Todo v-on:enlarge="enlargeFS" v-bind:todos="todos" />
    <p @click="test($event)">test</p>
    <input type="text" @input="show" />
    <Paragraph>
      <template #message="{user: {name}}">{{name}}</template>
      <template v-slot:template>
        <InputBox style="color:red" @focus="onFocus" type="date" value="日期選擇框" />
      </template>
    </Paragraph>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-link to="/box">Go to Box</router-link>
    <router-view></router-view>
  </div> -->
  <v-app>

    <!-- 側邊導覽列 -->
    <v-navigation-drawer app v-model="drawer">

      <!-- 網頁標題 -->
      <v-list-item to="/">
        <v-list-item-content>
          <v-list-item-title class="title"> 網站名稱 </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- 選單 -->
      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-*</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>選單項目</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <!-- 頂部導覽列 -->
    <v-app-bar app color="blue" dark collapse>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- 內容區塊 -->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- footer -->
    <v-footer app class="justify-center"></v-footer>

  </v-app>
</template>

<script>
import Todo from "./components/todo";
import InputBox from "./components/inputBox";
import Paragraph from "./components/paragraph";

export default {
  data: function () {
    return {
      drawer: true,
      todos: [
        {
          date: "1999/01/01",
          handle: "範例1",
        },
        {
          date: "1999/01/01",
          handle: "範例2",
        },
      ],
      fs: 5,
    };
  },

  methods: {
    test: function (e) {
      console.log(e);
    },
    enlargeFS: function () {
      this.fs += 5;
    },
    show: function () {
      console.log("input");
    },
    onFocus: function () {
      console.log("focus123");
    },
  },

  components: {
    Todo,
    InputBox,
    Paragraph,
  },
};
</script>