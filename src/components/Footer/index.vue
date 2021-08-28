<template>
  <van-tabbar v-model="active" class="flex jc-sa ai-c wp-100">
    <router-link class="item" to="/home" active-class="active">
      <van-tabbar-item icon="wap-home-o"> 首页 </van-tabbar-item>
    </router-link>

    <router-link class="item" to="/case" active-class="active">
      <van-tabbar-item icon="apps-o"> 案例 </van-tabbar-item>
    </router-link>

    <router-link class="item" to="/knowledge" active-class="active">
      <van-tabbar-item icon="description"> 知识 </van-tabbar-item>
    </router-link>

    <router-link class="item" to="/my" active-class="active">
      <van-tabbar-item icon="friends-o"> 我的 </van-tabbar-item>
    </router-link>
    <router-link class="item" to="/demo" active-class="active">
      <van-tabbar-item icon="friends-o"> demo </van-tabbar-item>
    </router-link>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: "",
    };
  },
};
</script>

<style lang="less" scoped>
.item {
  display: block;
  width: 13%;
}
.active {
  .van-tabbar-item {
    color: #f40;
  }
}
</style>