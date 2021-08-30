<template>
  <div>
    <h2>详情</h2>
  </div>
</template>

<script>
export default {
  name: "detail",
  created() {
    console.log(this.$route.params);
  },
};
</script>

<style>
</style>