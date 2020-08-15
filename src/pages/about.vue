<template>
  <div>
    <h1>關於我們</h1>
    <div v-html="content"></div>
  </div>
</template>

<script>
import { instance as http } from "../http";
export default {
  data: function() {
    return {
      content: "",
    };
  },
  //第一次跳轉之前載入about，載入完畢才進入該頁面
  async beforeRouteEnter(to, from, next) {
    const about = await http({
      method: "get",
      url: "about",
      params: {},
    });

    try {
      next((vm) => {
        vm.content = about.data.about;
      });
    } catch (err) {
      console.error(err);

      next((vm) => {
        vm.content = "無法取得資料";
        vm.$toast.launch({
          message: "權限確認失敗",
          type: "error",
        });
      });
    }
  },
};
</script>

<style></style>
