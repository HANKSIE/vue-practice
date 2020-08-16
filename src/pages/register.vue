<template>
  <div class="page">
    <template v-if="isSend">
      <Card
        :content="confirmContent"
        :style="{ minWidth: '200px', width: '50%', height: '400px' }"
      >
        <InputBtn @click="sendAgain">沒收到嗎?再送一次</InputBtn>
      </Card>
    </template>
    <template v-else>
      <Form @submit="register" :style="{ padding: '40px' }">
        <h1 class="title">註冊</h1>
        <Group>
          <InputLabel>使用者名稱</InputLabel>
          <InputBox type="text" name="name" required v-model="name" />
        </Group>
        <Group>
          <InputLabel>信箱</InputLabel>
          <InputBox type="email" name="email" required v-model="email" />
        </Group>
        <Group>
          <InputLabel>密碼</InputLabel>
          <InputBox
            type="password"
            name="password"
            required
            v-model="password"
          />
        </Group>
        <Group>
          <InputLabel>確認密碼</InputLabel>
          <InputBox
            type="password"
            name="confirm_password"
            required
            v-model="confirmPassword"
          />
        </Group>
        <Group>
          <InputBtn type="primary">註冊</InputBtn>
        </Group>
      </Form>
    </template>
  </div>
</template>

<script>
import InputBtn from "../components/form/input/button";
import InputLabel from "../components/form/input/label";
import InputBox from "../components/form/input/box";
import Form from "../components/form/form";
import Group from "../components/form/group";
import PopWindow from "../components/popWindow";
import Card from "../components/card";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isSend: false,
      confirmContent: "",
      sendAgainUrl: "",
    };
  },
  methods: {
    register: function(e) {
      const formData = new FormData(e.target);
      this.$http({
        method: "post",
        url: "register",
        data: formData,
      })
        .then((res) => {
          if (res.data.isSuccess) {
            this.isSend = true;
            this.confirmContent = res.data.message;
            this.sendAgainUrl = res.data.sendAgainUrl;
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

    sendAgain: function() {
      this.$http({
        method: "get",
        url: this.sendAgainUrl,
        params: {},
      })
        .then((res) => {
          if (res.data.isSuccess) {
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
  },
  components: {
    Form,
    Group,
    InputLabel,
    InputBox,
    InputBtn,
    PopWindow,
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
  padding: 20px 0;
}
.title {
  margin: 10px;
}
</style>
