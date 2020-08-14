<template>
  <div class="page">
    <Form>
      <h1>登入</h1>
      <Group>
        <InputLabel>帳號</InputLabel>
        <InputBox type="email" v-model="email" />
      </Group>
      <Group>
        <InputLabel>密碼</InputLabel>
        <InputBox type="password" v-model="password" />
      </Group>
      <Group>
        <InputBtn type="primary">提交</InputBtn>
      </Group>
      <router-link to="/forgot" class="forgot">忘記密碼</router-link>
      <router-link to="/register" class="forgot">註冊</router-link>
    </Form>
  </div>
</template>

<script>
import InputBtn from "../../components/form/input/button";
import InputLabel from "../../components/form/input/label";
import InputBox from "../../components/form/input/box";
import Form from "../../components/form/form";
import Group from "../../components/form/group";

export default {
  data: function() {
    return { email: "", password: "" };
  },
  components: { Form, Group, InputLabel, InputBox, InputBtn },
};
</script>
<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";
.page {
  @include center-layout;
  height: 100%;
  width: 100%;
}

.forgot {
  color: #444444;
  font-size: 13px;
  margin-top: 20px;
}
</style>
