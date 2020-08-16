<template>
  <div class="page">
    <Form
      @submit="contact"
      :style="{ paddingTop: '20px', paddingBotton: '20px' }"
    >
      <h1 :style="{ margin: '10px' }">聯絡表單</h1>
      <Group>
        <InputLabel>標題</InputLabel>
        <InputBox
          type="text"
          name="title"
          required
          v-model="title"
          boxType="rounded"
        />
      </Group>
      <Group>
        <InputLabel>說明</InputLabel>
        <InputTextArea name="content" required v-model="content" />
      </Group>
      <Group>
        <InputLabel>信箱</InputLabel>
        <InputBox
          type="email"
          name="creator_email"
          required
          v-model="email"
          boxType="rounded"
        />
      </Group>
      <Group>
        <InputBtn type="primary">提交</InputBtn>
      </Group>
    </Form>
  </div>
</template>

<script>
import InputBtn from "../components/form/input/button";
import InputLabel from "../components/form/input/label";
import InputBox from "../components/form/input/box";
import InputTextArea from "../components/form/input/textarea";
import Form from "../components/form/form";
import Group from "../components/form/group";

export default {
  data: function() {
    return { email: "", content: "", title: "" };
  },
  methods: {
    contact: function(e) {
      const formData = new FormData(e.target);
      this.$http({
        method: "post",
        url: "contact",
        data: formData,
      })
        .then((res) => {
          if (res.data.isSuccess) {
            this.email = this.content = this.title = "";
          }

          this.$toast.launch({
            message: res.data.message,
            type: "normal",
          });
        })
        .catch((err) => {
          console.error(err);
          this.$toast.launch({
            message: "提交失敗",
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
    InputTextArea,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/helpers/mixins.scss";
.page {
  @include center-layout;
  height: 100%;
  width: 100%;
  padding: 20px;
}

.forgot {
  color: #444444;
  font-size: 13px;
  margin-top: 20px;
}
</style>
