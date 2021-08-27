<template>
  <div>
    <van-tabbar v-model="active" class="flex jc-sa ai-c">
      <router-link class="item" to="/discover" active-class="active">
        <van-tabbar-item icon="music-o"> 发现 </van-tabbar-item>
      </router-link>

      <router-link class="item" to="my" active-class="active">
        <van-tabbar-item icon="circle"> 我的 </van-tabbar-item>
      </router-link>

      <router-link class="item" to="cloud" active-class="active">
        <van-tabbar-item icon="friends-o"> 云村 </van-tabbar-item>
      </router-link>
    </van-tabbar>
  </div>
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