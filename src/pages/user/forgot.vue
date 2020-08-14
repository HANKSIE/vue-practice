<template>
  <div>
    <Form class="form">
      <h1>找回您的密碼</h1>
      <Group class="group">
        <InputLabel>請填寫您的email:</InputLabel>
        <input type="email" class="box" v-model="email" name="" id="" />
      </Group>
      <Btn type="primary" :handle="sendAuthMail">寄送驗證信</Btn>
    </Form>
  </div>
</template>

<script>
import Form from "../../components/form/form";
import Group from "../../components/form/group";
import Btn from "../../components/input/button";
import InputLabel from "../../components/input/label";

export default {
  data: function() {
    return { email: "" };
  },
  methods: {
    sendAuthMail: function() {
      const formData = new FormData();
      formData.append("email", this.email);

      this.axios({
        method: "post",
        url: "url",
        data: formData,
      })
        .then((res) => {
          this.$store.commit({
            type: "pushToToastQueue",
            instance: {
              message: res.data.message,
              type: "success",
            },
          });
        })
        .catch((err) => {
          this.$store.commit({
            type: "pushToToastQueue",
            instance: {
              message: "寄送失敗",
              type: "success",
            },
          });
        });
    },
  },
  components: { Form, Group, Btn, InputLabel },
};
</script>

<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";
.form {
  padding: 50px;
}
.group {
  margin: 50px auto;
}

.box {
  @include box;
}
</style>
