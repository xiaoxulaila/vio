<template>
  <div>
    <login-top> 
      <div slot="loginReturn">返回</div>
    </login-top>
  </div>
</template>
<script>
import LoginTop from "./common/LoginTop.vue";
export default {
  name: "register",
  components: {
    LoginTop,
  },
};
</script>
<style lang="less">
</style>