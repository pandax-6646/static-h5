<template>
  <van-swipe :autoplay="3000" :height="220">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>

export default {
  data() {
    return {
      images: [],
    };
  },
  created() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
}
</style>