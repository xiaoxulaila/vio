<template>
  <div id="edit">
    <navber />
    <div id="editBanner" v-if="model">
      <div class="uploadfile">
        <van-uploader class="uploadimg" :after-read="afterRead" preview-size="100vw" />
        <editBanner left="头像">
          <div class="right" slot="right">
            <img v-if="model.user_img" :src="model.user_img" alt="model.user_img" />
            <img v-else src="./../assets/default_img.jpg" alt="" />
          </div>
        </editBanner>
      </div>

      <editBanner left="昵称" @bannerClick="show = true">
        <a class="right" slot="right">{{ model.name }}</a>
      </editBanner>
      <editBanner left="账号" @bannerClick="usershow = true">
        <a class="right" slot="right">{{ model.username }}</a>
      </editBanner>
      <editBanner left="性别" @bannerClick="gendershow = true"
        ><div class="right" slot="right">
          {{ model.gender == 1 ? "男" : "女" }}
        </div></editBanner
      >
      <editBanner left="个签" @bannerClick="signashow = true">
        <a class="right" slot="right">{{ model.user_desc }}</a>
      </editBanner>
    </div>

    <!-- 昵称修改框 -->
    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="confirmClick"
      @cancel="concent = ''"
    >
      <van-field v-model="concent" autofocus />
    </van-dialog>
    <!-- 账号修改框 -->
    <van-dialog
      v-model="usershow"
      title="账号"
      show-cancel-button
      @confirm="confirmUserClick"
      @cancel="concent = ''"
    >
      <van-field v-model="concent" autofocus />
    </van-dialog>
    <!-- 性别修改 -->
    <van-action-sheet
      v-model="gendershow"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @select="genderClick"
    />
    <!-- 个签修改框 -->
    <van-dialog
      v-model="signashow"
      title="个签"
      show-cancel-button
      @confirm="signatureClick"
      @cancel="concent = ''"
    >
      <van-field v-model="concent" type="textarea" autofocus />
    </van-dialog>

    <edit-but></edit-but>
  </div>
</template>
<script>
import navber from "./common/navber.vue";
import editBanner from "./common/editBanner.vue";
import EditBut from "./common/editBut.vue";
export default {
  data() {
    return {
      model: "",
      show: false,
      usershow: false,
      signashow: false,
      gendershow: false,
      actions: [
        { name: "男", val: 1 },
        { name: "女", val: 0 },
      ],
      concent: "",
    };
  },
  components: { navber, editBanner, EditBut },
  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async UserUpdate() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
      if (res.data.code == 200) {
        this.$msg.fail("修改成功");
      }
    },
    // 头像修改
    async afterRead(file) {
      const fromdata = new FormData();
      fromdata.append("file", file.file);
      const res = await this.$http.post("/upload", fromdata);
      this.model.user_img = res.data.url;
      this.UserUpdate();
    },
    // 名字
    confirmClick() {
      this.model.name = this.concent;
      this.concent = "";
      this.UserUpdate();
    },
    // 账号
    confirmUserClick() {
      this.model.username = this.concent;
      this.concent = "";
      this.UserUpdate();
    },
    // 个签
    signatureClick() {
      this.model.user_desc = this.concent;
      this.concent = "";
      this.UserUpdate();
    },
    // 性别
    genderClick(data) {
      this.model.gender = data.val;
      this.UserUpdate();
      this.gendershow = false;
    },
  },
  created() {
    this.selectUser();
  },
};
</script>
<style lang="less">
#edit {
  #editBanner {
    margin: 20px 0;
    .right {
      color: #ccc;
      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }
    .uploadfile {
      position: relative;
      overflow: hidden;
      .uploadimg {
        position: absolute;
        opacity: 0;
      }
    }
  }
}
</style>
