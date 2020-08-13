<template>
  <div class="page">
    <div class="form">
      <h1>登入</h1>
      <div class="form-group">
        帳號
        <InputBox type="text" />
      </div>
      <div class="form-group">
        密碼
        <InputBox type="password" />
      </div>
      <div class="form-group">
        <InputBtn type="primary">提交</InputBtn>
      </div>
      <router-link to="/forgot" class="forgot">忘記密碼</router-link>
      <router-link to="/register" class="forgot">註冊</router-link>
    </div>
  </div>
</template>

<script>
import InputBox from "../../components/input/box";
import InputBtn from "../../components/input/button";
export default {
  components: { InputBox, InputBtn },
};
</script>
<style lang="scss" scoped>
@import "../../styles/helpers/mixins.scss";

.page {
  @include center-layout;
  width: 100%;
  height: 100%;
}

.form {
  @include vc-layout;
  padding: 30px;
  border-radius: 6px;
  box-shadow: 0 3px 7px #444444;
  background-color: #ffffff;
}

.form-group {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.forgot {
  color: #444444;
  font-size: 13px;
  margin-top: 20px;
}
</style>