<template>
  <div>
    <Form class="form">
      <h1>找回您的密碼</h1>
      <Group class="group">
        <InputLabel>請填寫您的email:</InputLabel>
        <InputBox />
      </Group>
      <Btn type="primary">寄送驗證信</Btn>
    </Form>
  </div>
</template>

<script>
import Form from "../../components/form/form";
import Group from "../../components/form/group";
import Btn from "../../components/input/button";
import InputBox from "../../components/input/box";
import InputLabel from "../../components/input/label";
export default {
  components: { Form, Group, Btn, InputBox, InputLabel },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 50px;
}
.group {
  margin: 50px auto;
}
</style>