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
        <div class="item-img ta-c flex jc-sb">
          <router-link
            :to="`/home/detail/${item.id}`"
            class="mr-10"
            v-for="(product, index) in item.products"
            :key="index"
          >
            <img :src="product.imageUrl" alt="" />
            <span class="mt-10 fs-13">{{ product.dec }}</span>
          </router-link>

          <div class="see-more flex ai-c fd-c jc-c fc-fff">
            <span class="fs-13">查看更多</span>
            <van-icon name="arrow" class="mt-5 icon-right" />
          </div>
        </div>
      </li>
    </ul>

    <!-- 案例 -->
    <div class="case wp-100 ta-c bc-fff mt-10">
      <p class="fs-18 pt-15 pb-15">案例展示</p>
      <div v-for="(item, index) in caseList" :key="index" class="case-item">
        <img :src="item.imageUrl" alt="" />
        <p class="fs-14 mt-15">{{ item.title }}</p>
      </div>
      <div class="pb-30 flex jc-c">
        <div class="more-case fs-13">更多案例</div>
      </div>
    </div>

    <Loading v-if="isLoading" />
    <Footer />
  </div>
</template>

<script>
import Footer from "components/Footer";
import Loading from "components/Loading";
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

      // 是否显示 loading
      isLoading: true,
    };
  },
  components: {
    Footer,
    Loading,
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
        this.isLoading = false;
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
.list {
  li:not(:last-child) {
    margin-bottom: 5px;
  }

  .title {
    border-bottom: 1px solid #d9d9d9;
    p:first-child {
      font-weight: bold;
    }
  }
  .item-img {
    padding: 15px;
    box-sizing: border-box;
    overflow-x: auto;
    div {
      img {
        height: 165px;
        width: 118px;
      }
    }
  }
  .see-more {
    min-width: 80px;
    height: 165px;
    background-color: #f87397;
    .icon-right {
      height: 25px;
      width: 25px;
      line-height: 25px;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 50%;
    }
  }
}
.case {
  margin-bottom: 55px;
  & > p {
    font-weight: bold;
  }
  .case-item {
    height: 305px;

    p {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 50px;
        border-top: 2px solid #999;
        top: -10px;
        left: calc(50% - 25px);
      }
    }
  }
  .more-case {
    width: 155px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    background-color: #f5829f;
    border-radius: 30px;
  }
}
</style>