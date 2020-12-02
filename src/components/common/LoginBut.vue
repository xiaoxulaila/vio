<template>
  <div class="loginBut" @click="registerClick">{{ loginBut }}</div>
</template>
<script>
export default {
  props: ["loginBut"],
  methods: {
    registerClick() {
      this.$emit("registerSubmit");
    },
  },
};
</script>
<style lang="less">
.loginBut {
  height: 45px;
  background-color: #ff9db5;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  border-radius: 22.5px;
  margin: 20px 0;
}
</style>