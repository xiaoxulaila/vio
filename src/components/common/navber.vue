<template>
  <div id="navber">
    <div><img src="../../assets/logo.png" alt="" /></div>
    <div>
      <p>
        <van-icon class="van-icon" name="search" />
        <span>123</span>
      </p>
    </div>
    <div>
      <img src="../../assets/default_img.jpg" alt="" />
      <div>
        <p>下载APP</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#navber {
  background-color: #fff;
  height: 12vw;
  display: flex;
  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    img {
      width: 80%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 3% 0 1%;
    p {
      background-color: #f4f4f4;
      padding: 5px 5px 5px 5px;
      height: 15px;
      width: 100%;
      border-radius: 15px;
      .van-icon {
        padding: 0;
        color: #aaa;
        font-size: 4vw;
      }
      span{
        font-size: 3.5vw;
        position: absolute;
        color: #aaa;
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    div {
      max-width: 70px;
      background-color: #ff9db5;
      margin: 0px 2px;
      border-radius: 8px;
      p {
        width: 100%;
        font-size: 3vw;
        text-align: center;
        color: #fff;
        margin: 4px 0px;
        background-color: #ff9db5;
        padding: 5px 5px;
      }
    }
  }
}
</style>
