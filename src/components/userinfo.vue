<template>
  <div id="userinfo">
    <navber />
    <div id="banner"><img src="./../assets/bannerTop_new.png" alt="" /></div>
  </div>
</template>
<script>
import navber from "./common/navber.vue";
export default {
  components: { navber },
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
