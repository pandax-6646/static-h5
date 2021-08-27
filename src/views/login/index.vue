<template>
  <div>
    <h2>登录页</h2>
  </div>
</template>

<script>
import { loginRequest } from "api/index";
export default {
  created() {
    loginRequest
      .logon({ phone: 18720514724, password: "xzq664673913" })
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
  },
};
</script>

<style>
</style>