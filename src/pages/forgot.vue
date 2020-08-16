<template>
  <div class="page">
    <template v-if="isSend">
      <Card :style="{ minWidth: '200px', width: '50%' }">
        {{ message }}
        <form @submit.prevent="sendAgain">
          <input type="hidden" name="email" v-model="email" />
          <InputBtn>沒收到嗎?再送一次</InputBtn>
        </form>
      </Card>
    </template>
    <template v-else>
      <Form class="form" @submit="send">
        <h1>重新設定您的密碼</h1>
        <span :style="{ fontSize: '15px', color: '#888888' }">
          系統會寄送修改密碼連結至您的信箱
        </span>
        <Group class="group">
          <InputLabel>請填寫您的email:</InputLabel>
          <InputBox type="email" name="email" required v-model="email" />
        </Group>
        <InputBtn type="primary">寄送驗證信</InputBtn>
      </Form>
    </template>
  </div>
</template>

<script>
import Form from "../components/form/form";
import Group from "../components/form/group";
import InputBtn from "../components/form/input/button";
import InputBox from "../components/form/input/box";
import InputLabel from "../components/form/input/label";
import Card from "../components/card";

export default {
  data: function() {
    return {
      email: "",
      isSend: false,
      message: "",
    };
  },
  methods: {
    send: function(e) {
      const formData = new FormData(e.target);
      this.$http({
        method: "post",
        url: "/user/forgot",
        data: formData,
      })
        .then((res) => {
          if (res.data.isSuccess) {
            this.isSend = true;
            this.message = res.data.message;
          } else {
            this.$toast.launch({
              message: res.data.message,
              type: "normal",
            });
          }
        })
        .catch((err) => {
          console.error(err);
          this.$toast.launch({
            message: "請求失敗",
            type: "error",
          });
        });
    },
    sendAgain: function(e) {
      const formData = new FormData(e.target);
      this.$http({
        method: "post",
        url: "/user/forgot",
        data: formData,
      })
        .then((res) => {
          this.$toast.launch({
            message: res.data.message,
            type: "normal",
          });
        })
        .catch((err) => {
          console.error(err);
          this.$toast.launch({
            message: "請求失敗",
            type: "error",
          });
        });
    },
  },
  components: {
    Form,
    Group,
    InputBtn,
    InputLabel,
    InputBox,
    Card,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/helpers/mixins.scss";

.page {
  @include vc-layout;
  height: 100%;
  width: 100%;
}

.form {
  padding: 50px;
}
.group {
  margin: 50px auto;
}
</style>
