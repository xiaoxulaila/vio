<template>
  <div id="register">
    <login-top middleTop="注册vio">
      <div class="loginReturn" @click="$router.push('/login')" slot="loginReturn">
        返回登录
      </div>
    </login-top>
    <div class="loginInput">
      <login-text
        label="姓名"
        placeholder="请输入姓名"
        rule="^.{6,16}$"
        :autofocus="true"
        @inputChange="(res) => (model.name = res)"
      >
      </login-text>
    </div>
    <div class="loginInput">
      <login-text
        label="账号"
        placeholder="请输入账号"
        rule="^.{6,16}$"
        @inputChange="(res) => (model.username = res)"
      >
      </login-text>
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
      model: {
        name: "",
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
    async registerSubmit() {
      let rulg = /^.{6,16}$/;
      if (
        rulg.test(this.model.name) &&
        rulg.test(this.model.username) &&
        rulg.test(this.model.password)
      ) {
        const res = await this.$http.post("/register", this.model);
        let resMsg = res.data.msg;
        let resCode = res.data.code;
        localStorage.getItem("id", res.data.id);
        localStorage.getItem("token", res.data.objtoken);
        if (resCode == 200) {
          this.$msg.success(resMsg);
          // const _that = this;
          setTimeout(() => {
            this.$router.push("/userinfo");
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
