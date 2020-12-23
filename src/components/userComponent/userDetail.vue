<template>
  <div id="userDetail">
    <div id="userDetailTop">
      <div class="user_img">
        <img :src="userInfo.user_img" alt="" v-if="userInfo.user_img" />
        <img src="../../assets/default_img.jpg" alt="" v-else />
      </div>
      <div class="user_edit">
        <div>
          <p><span>0</span><span>粉丝</span></p>
          <span>|</span>
          <p><span>0</span><span>关注</span></p>
          <span>|</span>
          <p><span>0</span><span>获赞</span></p>
        </div>
        <div>
          <div class="user_editBtn" @click="$router.push('/edit')">编辑资料</div>
        </div>
      </div>
    </div>
    <div id="userDetailMiddle">
      <h2>{{ userInfo.name }}</h2>
      <p v-if="userInfo.user_desc">{{ userInfo.user_desc }}</p>
      <p v-else>这个人很神秘，什么都没有写</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["userInfo"],
};
</script>
<style lang="less">
#userDetail {
  background-color: #fff;
  padding: 0 12px;
  #userDetailTop {
    display: flex;
    .user_img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      top: -10px;
      margin-right: 40px;
      img {
        width: auto;
        height: 100%;
      }
    }
    .user_edit {
      flex: 1;
      div:nth-child(1) {
        display: flex;
        p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-size: 13px;
          span:nth-child(2) {
            color: #666;
          }
        }
        span {
          display: flex;
          align-items: center;
          color: #ccc;
          font-size: 16px;
        }
      }
      div:nth-child(2) {
        .user_editBtn {
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #fb7a9f;
          border-radius: 5px;
          color: #fb7a9f;
        }
      }
    }
  }
  #userDetailMiddle {
    h2 {
      margin: 2.778vw 0 0.833vw 0;
      font-weight: 400;
    }
    p {
      margin: 2.778vw 0 0 0;
      padding: 0;
      color: #aaa;
    }
  }
}
</style>
