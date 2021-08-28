<template>
  <div class="home-container">
    <Swiper />
    <Footer />
  </div>
</template>

<script>
import Swiper from "./children/swiper";
import Footer from "components/Footer";

import { homeRequest } from "api";
export default {
  name: "home",
  data() {
    return {
      // 轮播图
      banners: [],
    };
  },
  components: {
    Footer,
    Swiper,
  },
  created() {
    this.getHomeBanner();
  },
  methods: {
    getHomeBanner() {
      homeRequest
        .fetchHomeBanner()
        .then((res) => {
          this.banners = res.banners;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>