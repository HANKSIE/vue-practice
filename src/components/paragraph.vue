<template>
  <div>
    <slot name="message" v-bind:user="user">沒有內容</slot>
    <slot name="template">沒有html</slot>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: {
          name: '106021014'
      }
    };
  },
};
</script>

<style>
</style>