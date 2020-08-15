<template>
  <div>
    <h1>關於我們</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      content: "",
    };
  },
  created: function () {
    this.$http({
      method: "get",
      url: "about",
      params: {},
    })
      .then((res) => {
        this.content = res.data.about;
      })
      .catch((err) => {
        console.error(err);
        this.$toast.launch({
          message: "訊息取得失敗",
          type: "error",
        });
      });
  },
};
</script>

<style>
</style>