<template>
  <div class="loading-container flex ai-c jc-c">
    <van-loading type="spinner" color="#1989fa" size="24px">加载中...</van-loading>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 999;
}
</style>