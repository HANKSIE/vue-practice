<template>
  <div class="page">
    <Form>
      <h1>登入</h1>
      <Group>
        <InputLabel>帳號</InputLabel>
        <input type="email" class="box" />
      </Group>
      <Group>
        <InputLabel>密碼</InputLabel>
        <input type="password" class="box" />
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
import InputBtn from "../../components/input/button";
import InputLabel from "../../components/input/label";
import Form from "../../components/form/form";
import Group from "../../components/form/group";

export default {
  components: { InputBtn, Form, Group, InputLabel },
};
</script>
<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";
.page {
  @include center-layout;
  width: 100%;
  height: 100%;
}

.forgot {
  color: #444444;
  font-size: 13px;
  margin-top: 20px;
}

.box {
  @include box;
}
</style>
