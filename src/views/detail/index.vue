<template>
  <div class="detail-container">
    <van-nav-bar title="详情" left-arrow @click-left="$router.push('/home')" />
    <div class="flex-cc fw-w">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in imgList"
        :key="index"
        class="mt-25"
      />
    </div>
  </div>
</template>

<script>
import { homeRequest } from "api";
export default {
  name: "detail",
  data() {
    return {
      imgList: [],
    };
  },

  created() {
    this.getDetailData(this.$route.params.id);
  },
  methods: {
    getDetailData(id) {
      homeRequest.fetchHomeDetail({ id }).then((res) => {
        this.imgList = res.imageUrls;
      });
    },
  },
};
</script>

<style>
</style>