<template>
  <div class="editBanner" @click="editBanner">
    <span>{{ left }}</span>
    <span><slot name="right" /></span>
  </div>
</template>
<script>
export default {
  props: ["left"],
  methods: {
    editBanner() {
      this.$emit("bannerClick");
    },
  },
};
</script>
<style lang="less">
.editBanner {
  background-color: #fff;
  padding: 15px;
  font-size: 4.44vw;
  border-bottom: 1px solid #fafafa;
  display: flex;
  justify-content: space-between;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
