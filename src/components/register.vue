<template>
  <div id="register">
    <login-top middleTop="注册vio">
      <div class="loginReturn" slot="loginReturn">返回</div>
    </login-top>
    <div class="loginInput">
      <login-text
        label="姓名"
        placeholder="请输入姓名"
        rule="^.{6,16}$"
        :autofocus="true"
        @inputChange="(res) => (name = res)"
      >
      </login-text>
    </div>
    <div class="loginInput">
      <login-text
        label="账号"
        placeholder="请输入账号"
        rule="^.{6,16}$"
        @inputChange="(res) => (username = res)"
      >
      </login-text>
      <login-text
        label="密码"
        type="password"
        placeholder="请输入密码"
        rule="^.{6,16}$"
        @inputChange="(res) => (password = res)"
      >
      </login-text>
    </div>
    <div class="regLogBut" @click="registerSubmit">
      <login-but loginBut="注册" />
    </div>
  </div>
</template>
<script>
import LoginTop from "./common/LoginTop.vue";
import LoginText from "./common/LoginText.vue";
import LoginBut from "./common/LoginBut.vue";
export default {
  name: "register",
  data() {
    return {
      //创建一个模型，一个存储数据的对象
      name: "",
      username: "",
      password: "",
    };
  },
  components: {
    LoginTop,
    LoginText,
    LoginBut,
  },
  methods: {
    successTpt(contnet) {
      console.log(contnet);
    },
    async registerSubmit() {
      let rulg = /^.{6,16}$/;
      if (this.name && this.username && this.password) {
        const res = await this.$http
          .post("/register", {
            name: this.name,
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            console.log(res);
          });
      } else {
        this.$msg.fail("格式不正确");
      }
    },
  },
};
</script>
<style lang="less">
#register {
  .loginInput {
    margin: 3vw 0;
  }
  .regLogBut {
    padding: 0% 2%;
  }
}
</style>