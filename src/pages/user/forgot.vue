<template>
  <div>
    <Form class="form">
      <h1>找回您的密碼</h1>
      <Group class="group">
        <InputLabel>請填寫您的email:</InputLabel>
        <InputBox type="email" v-model="email" />
      </Group>
      <InputBtn type="primary" :handle="sendAuthMail">寄送驗證信</InputBtn>
    </Form>
  </div>
</template>

<script>
import Form from "../../components/form/form";
import Group from "../../components/form/group";
import InputBtn from "../../components/form/input/button";
import InputBox from "../../components/form/input/box";
import InputLabel from "../../components/form/input/label";

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
              type: "error",
            },
          });
        });
    },
  },
  components: { Form, Group, InputBtn, InputLabel, InputBox },
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
</style>
