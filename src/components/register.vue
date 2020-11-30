<template>
  <div>
    <login-top middleTop="注册vio">
      <div class="loginReturn" slot="loginReturn">返回</div>
    </login-top>
    <login-text label="123">
    </login-text>
  </div>
</template>
<script>
import LoginTop from "./common/LoginTop.vue";
import LoginText from "./common/LoginText.vue";
export default {
  name: "register",
  components: {
    LoginTop,
    LoginText,
  },
};
</script>
<style lang="less">
</style>