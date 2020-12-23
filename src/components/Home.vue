<template>
  <div>
    <navber />
    <van-tabs v-model="active" scrollspy sticky>
      <!-- key是一个优化for循环性能 -->
      <van-tab v-for="(item, index) in category" :key="index" :title="item.title">
        内容{{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import navber from "./common/navber.vue";
export default {
  data() {
    return {
      category: [],
      active: 0,
    };
  },
  components: {
    navber,
  },
  methods: {
    async selectCategary() {
      const res = await this.$http.get("/category");
      this.changecategory(res.data);
    },
    // 下拉刷新
    // 改变category数据
    changecategory(data) {
      // map在已有的后端数据进行改造
      const category1 = data.map((item, index) => {
        console.log(index);
        item.list = [];
        item.page = 0;
        item.pagesize = 10;
        return item;
      });
      this.category = category1;
    },
    // 获取文章的数据
    async selectArticle() {
      const categoryitem = this.categoryitem();
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize,
        },
      });
      console.log(res);
    },
    // 获取文章id
    categoryItem() {
      const categoryitem = this.category[this.active];
      return categoryitem;
    },
  },
  watch: {
    // 监听下标点击
    active() {
      this.selectArticle();
    },
  },
  created() {
    this.selectCategary();
  },
};
</script>
<style lang="less"></style>