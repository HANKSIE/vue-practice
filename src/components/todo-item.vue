<template>
  <li>完成日期: {{todo.date}}, 內容: {{todo.handle}}</li>
</template>

<script>
export default {
  props: ["todo"],
};
</script>