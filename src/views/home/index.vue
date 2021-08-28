<template>
  <div class="home-container">
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" :height="485" indicator-color="#fff">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 分类导航 -->
    <van-grid
      :column-num="2"
      :border="false"
      style="height: 190px"
      class="mt-10 mb-10 wp-100 bc-fff flex jc-sa ac-sa"
    >
      <div
        v-for="(item, index) in categoryList"
        :key="index"
        class="flex fd-c ai-c mr-10 ml-10"
      >
        <img :src="item.imageUrl" alt="" style="border-radius: 50%" />
        <span class="pt-10 fs-12">{{ item.title }}</span>
      </div>
    </van-grid>

    <!-- 列表 -->
    <ul class="list wp-100 bc-fff">
      <li v-for="(item, index) in list" :key="index">
        <div class="title fs-18 ta-c pt-10">
          <p>{{ item.title }}</p>
          <p class="mt-5 mb-5">{{ item.titleE }}</p>
        </div>
        <div>
          <div v-for="(product, index) in item.products" :key="index">
            <img :src="product.imageUrl" alt="" />
            <span>{{ product.dec }}</span>
          </div>

          <div>
            <span>查看更多</span>
            <van-icon name="arrow-left" />
          </div>
        </div>
      </li>
    </ul>

    <!-- 案例 -->
    <div class="case wp-100">
      <p>案例展示</p>
      <div v-for="(item, index) in caseList" :key="index">
        <img :src="item.imageUrl" alt="" />
        <p>{{ item.title }}</p>
      </div>

      <div>更多案例</div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "components/Footer";

import { homeRequest } from "api";
export default {
  name: "home",
  data() {
    return {
      // 轮播图
      banners: [],

      // 头部分类
      categoryList: [],

      // 列表
      list: [],

      // 案例数据
      caseList: [],
    };
  },
  components: {
    Footer,
  },
  created() {
    this.getHomeBanner();
    this.getHomeCategory();
    this.getHomeList();
    this.getHomeCaseList();
  },
  methods: {
    // 轮播图
    getHomeBanner() {
      homeRequest.fetchHomeBanner().then((res) => {
        this.banners = res.banners;
      });
    },

    // 头部分类
    getHomeCategory() {
      homeRequest.fetchHomeCategory().then((res) => {
        this.categoryList = res.category;
      });
    },

    // 列表数据
    getHomeList() {
      homeRequest.fetchHomeList().then((res) => {
        this.list = res.list;
      });
    },

    // 案例数据
    getHomeCaseList() {
      homeRequest.fetchHomeCaseList().then((res) => {
        this.caseList = res.caseList;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.case {
  width: 100%;
  height: 30px;
  margin-bottom: 55px;
}
.list {
  .title {
    border-bottom: 1px solid #d9d9d9;
    p:first-child {
      font-weight: bold;
    }
  }
}
</style>