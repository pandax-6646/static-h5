<template>
  <div class="login-container">
    <van-cell-group>
      <van-field
        v-model="phone"
        required
        type="number"
        label="手机号"
        placeholder="请输入手机号"
      /><van-field
        v-model="smsCode"
        center
        required
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" @click="getSmsCode" type="primary"
            >发送验证码</van-button
          >
        </template>
      </van-field>
    </van-cell-group>

    <van-button
      size="large"
      class="login"
      @click="login"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
    >
      登录
    </van-button>
  </div>
</template>

<script>
import { myRequest } from "api";
export default {
  data() {
    return {
      smsCode: "",
      phone: "18720514724",
    };
  },

  methods: {
    // 获取验证码
    getSmsCode() {
      // 检测电话号码是否合法
      let reg = /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (reg.test(this.phone)) {
        myRequest.fetchSmsCode({ phone: this.phone }).then((res) => {
          this.smsCode = res.smsCode;
        });
      } else {
        this.$toast.fail("请输入合法号码");
      }
    },

    // 登录
    login() {
      let params = {
        smsCode: this.smsCode,
        phone: this.phone,
      };
      myRequest.fetchLogin(params).then((res) => {
        this.$toast.success("登录成功");
        this.$store.commit("updateToken", res.token);
        this.$store.commit("updatePhone", res.phone);
        this.$router.push("/my");
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  border-radius: 10px;
  margin-top: 35px !important;
}
</style>