<template>
  <div id="editBut">
    <div @click="$router.push('/login')">退出登录</div>
    <div @click="$router.back()">返回空间</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#editBut {
  div {
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px;
  }
}
</style>
