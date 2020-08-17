<template>
  <div>
    <h1>關於我們</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
import { instance as http } from "../http";
export default {
  data: function () {
    return {
      content: "",
    };
  },
  created: async function () {
    const about = await http({
      method: "get",
      url: "about",
      params: {},
    });

    try {
      this.content = about.data.about;
    } catch (err) {
      console.error(err);
      this.content = "無法取得資料";
      this.$toast.launch({
        message: "權限確認失敗",
        type: "error",
      });
    }
  },
};
</script>

<style></style>
