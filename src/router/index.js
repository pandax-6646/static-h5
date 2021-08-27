import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/discover",
    },

    // 发现页
    {
      path: "/discover",
      component: () => import("views/discover/index"),
    },

    // 我的页
    {
      path: "/my",
      component: () => import("views/my/index"),
    },

    // 云村页
    {
      path: "/cloud",
      component: () => import("views/cloud/index"),
    },

    // 登录页
    {
      path: "/login",
      component: () => import("views/login/index"),
    },

    // 设置页
    {
      path: "/setting",
      component: () => import("views/setting/index"),
    },
  ],
});
