<template>
  <div class="my-container">
    <div class="user-info wp-100 flex ai-c">
      <img src="~assets/images/avatar.png" alt="" />

      <div v-if="$store.state.token">
        <span class="ml-10 fc-fff">{{
          $store.state.phone.replace(/(\d{3})(\d{4})(\d{3})/, "$1***$3")
        }}</span>

        <span class="ml-20" style="text-decoration: underline" @click="logout"
          >退出</span
        >
      </div>
      <span class="ml-10 fc-fff" v-else @click="$router.push('/login')"
        >立即登录</span
      >
    </div>
    <div class="goods-info wp-100 bc-fff flex fw-w ac-sa jc-sb mt-10 mb-10">
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="gold-coin-o" />
        <p class="mt-5 fs-14">待付款</p>
      </div>
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="paid" />
        <p class="mt-5 fs-14">待发货</p>
      </div>
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="logistics" />
        <p class="mt-5 fs-14">待收货</p>
      </div>
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="comment-o" />
        <p class="mt-5 fs-14">待评价</p>
      </div>
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="smile-o" />
        <p class="mt-5 fs-14">售后</p>
      </div>
    </div>

    <div class="setting wp-100 bc-fff flex fw-w ac-sa jc-sb mt-10 mb-10">
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="location-o" />
        <p class="mt-5 fs-14">收货地址</p>
      </div>
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="cart-o" />
        <p class="mt-5 fs-14">购物车</p>
      </div>
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="volume-o" />
        <p class="mt-5 fs-14">系统通知</p>
      </div>
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="todo-list-o" />
        <p class="mt-5 fs-14">足迹</p>
      </div>
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="star-o" />
        <p class="mt-5 fs-14">收藏</p>
      </div>
      <div class="info-item flex-cc fd-c">
        <van-icon size="26" name="like-o" />
        <p class="mt-5 fs-14">关注</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "components/Footer";
import { myRequest } from "api";
import mixin from "mixins";
export default {
  components: {
    Footer,
  },
  mixins: [mixin],
  methods: {
    logout() {
      this.dialog(this.logoutHandle, "是否确认删除");
    },

    logoutHandle() {
      myRequest.fetchLogout().then((res) => {
        this.$toast.success("退出成功");
        this.$store.commit("updatePhone", "");
        this.$store.commit("updateToken", "");
      });
    },
  },
};
</script>

<style lang='less' scoped>
.user-info {
  height: 130px;
  background: url("~assets/images/user-bg.png") no-repeat;

  img {
    height: 40px;
    width: 40px;
    margin-left: 100px;
  }
}
.goods-info {
  height: 130px;
  padding: 10px;
  box-sizing: border-box;
  .info-item {
    height: 50px;
    width: 80px;
  }
}
.setting {
  height: 130px;
  padding: 10px;
  box-sizing: border-box;
  .info-item {
    height: 50px;
    width: 100px;
  }
}
</style>