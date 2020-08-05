<template>
  <input ref="box" type="text" value="文字輸入選擇框" v-on="$listeners"/>
</template>

<script>

var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

export default {
  inheritAttrs: false,
  inject: ['sayhi', 'getBossMsg'],
  mixins: [myMixin],
  mounted: function(){
    this.$refs.box.value="Oh Yeahhh";
    this.sayhi();
    console.log(this.getBossMsg());
  }
};
</script>

<style>
</style>