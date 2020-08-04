<template>
  <div>
    <Btn
      :setting="{
        type: 'green',
        text: '放大',
        event: function(){$emit('enlarge')}
        }"
    />
    <p>
      新增日期
      <input type="date" v-model="date" />
    </p>
    <p>
      新增事項
      <input type="text" v-model="handle" />
    </p>
    <p>
      <Btn :setting="btns.new" />
      <Btn :setting="btns.del" />
    </p>
    <p>您有{{ todos.length }}件代辦事項</p>
    <div>
      <template v-if="todos.length == 0">
        <p style="color: red;" :title="tip">代辦清單是空的，趕緊新增!</p>
      </template>
      <template v-else>
        <ol>
          <li is="TodoItem" :todo="todo" v-for="todo in todos" :key="todo._uid"></li>
        </ol>
      </template>
    </div>
  </div>
</template>

<script>
import TodoItem from "./todo-item";
import Btn from "./button";
export default {
  props: ["todos"],

  data: function () {
    return {
      tip: "還等神麼，快去新增",
      handle: "",
      date: "",
      btns: {
        new: {
          type: "green",
          text: "新增",
          event: this.add,
        },
        del: {
          type: "red",
          text: "刪除最後一個代辦事項",
          event: this.sub,
        },
      },
    };
  },
  methods: {
    add() {
      if (this.date.trim() == "" || this.handle.trim() == "") {
        alert("日期和代辦事項不能為空值!");
        return;
      }
      this.todos.push({
        date: this.date,
        handle: this.handle,
      });
      // this.date = '';
      // this.handle = '';
    },

    sub() {
      this.todos.pop();
    },
  },

  components: { Btn, TodoItem },
};
</script>
