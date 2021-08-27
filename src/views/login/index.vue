<template>
  <div class="login-container wp-100">
    <div class="logo">
      <img src="~assets/images/topbar.png" alt="" />
    </div>
    <div class="login">
      <label for="phone">
        <input type="number" id="phone" v-model="phone" />
      </label>
      <label for="password">
        <input type="text" id="password" v-model="password" />
      </label>
    </div>

    <van-button round type="info" @click="login">圆形按钮</van-button>
  </div>
</template>

<script>
import { loginRequest } from "api/index";
export default {
  data() {
    return {
      phone: 18720514724,
      password: "xzq664673913",
    };
  },

  methods: {
    // 密码登录
    login() {
      // 检测电话号码是否合法
      let reg = /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (reg.test(this.phone)) {
        loginRequest
          .logon({ phone: this.phone, password: this.password })
          .then((res) => {
            if (res.code == 200) {
              this.$toast.success("登录成功");
              this.$store.commit("updateToken", res.token);
              this.$store.commit("updateUid", res.profile.userId);
              this.$router.push("/discover");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$toast.fail("请输入合法号码");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  background-color: #f40;
}
</style>