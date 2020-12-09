<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :rule="rule"
      v-model="content"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  props: ["label", "type", "placeholder", "rule", "autofocus"],
  methods: {
    // 判断正则
    handlerulg() {
      // 正则效验
      // RegExp 对象表示正则表达式
      const rue = new RegExp(this.rule);
      if (rue.test(this.content)) {
        this.$emit("inputChange", this.content);
      }
    },
  },
  //watch可以对data里面的数据监听
  watch: {
    content() {
      this.handlerulg();
    },
  },
};
</script>
<style lang="less">
</style>