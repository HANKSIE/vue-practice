<template>
  <div :style="{fontSize: fs+'px'}">
    <Todo v-on:enlarge="enlargeFS" :todos="todos" />
    <p @click="test($event)">test</p>
    <input type="text" @input="show" />
  </div>
</template>

<script>
import Todo from "./components/todo";
export default {
  data: function () {
    return {
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
  },

  components: {
    Todo,
  },
};
</script>