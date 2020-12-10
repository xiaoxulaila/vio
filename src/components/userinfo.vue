<template>
  <div id="userinfo">
    <navber />
    <div id="banner"><img src="./../assets/bannerTop_new.png" alt="" /></div>
    <user-detail> </user-detail>
  </div>
</template>
<script>
import navber from "./common/navber.vue";
import UserDetail from "./userComponent/userDetail.vue";
export default {
  components: { navber, UserDetail },
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
