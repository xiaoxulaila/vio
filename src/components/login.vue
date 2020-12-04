<template>
  <div id="register">
    <login-top middleTop="登录vio">
      <div
        class="loginReturn"
        @click="$router.push('/register')"
        slot="loginReturn"
      >
        返回注册
      </div>
    </login-top>
    <div class="loginInput">
      <login-text
        label="姓名"
        placeholder="请输入姓名"
        rule="^.{6,16}$"
        :autofocus="true"
        @inputChange="(res) => (model.username = res)"
      >
      </login-text>
    </div>
    <div class="loginInput">
      <login-text
        label="密码"
        type="password"
        placeholder="请输入密码"
        rule="^.{6,16}$"
        @inputChange="(res) => (model.password = res)"
      >
      </login-text>
    </div>
    <div class="regLogBut" @click="registerSubmit">
      <login-but loginBut="登录" />
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
      model: {
        username: "",
        password: "",
      },
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
      if (rulg.test(this.model.username) && rulg.test(this.model.password)) {
        const res = await this.$http.post("/login", this.model);
        let resMsg = res.data.msg;
        let resCode = res.data.code;
        if (resCode == 200) {
          this.$msg.success(resMsg);
          // const _that = this;
          setTimeout(() => {
            this.$router.push("/register");
          }, 1000);
        } else {
          this.$msg.fail(resMsg);
        }
      } else {
        this.$msg.fail("格式不正确");
      }
    },
  },
};
</script>
<style lang="less">
#register {
  .loginReturn {
    font-size: 3vw;
  }
  .loginInput {
    margin: 3vw 0;
  }
  .regLogBut {
    padding: 0% 2%;
  }
}
</style>