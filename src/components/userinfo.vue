<template>
  <div id="userinfo">
    <navber />
    <div id="banner"><img src="./../assets/bannerTop_new.png" alt="" /></div>
    <user-detail :userInfo="model"> </user-detail>
  </div>
</template>
<script>
import navber from "./common/navber.vue";
import UserDetail from "./userComponent/userDetail.vue";
export default {
  data() {
    return {
      model: {},
    };
  },
  components: { navber, UserDetail },
  methods: {
    async UserinfoData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
  },
  created() {
    this.UserinfoData();
  },
};
</script>
<style lang="less">
#userinfo {
  #banner {
    width: 100%;
    height: 35vw;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>
