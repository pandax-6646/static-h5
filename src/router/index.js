import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },

    // 首页
    {
      path: "/home",
      component: () => import("views/home/index"),
      children: [
        {
          path: "detail/:id",
          component: () => import("views/home/children/Detail"),
        },
      ],
    },

    // 案例页
    {
      path: "/case",
      component: () => import("views/case/index"),
    },

    // 知识页
    {
      path: "/knowledge",
      component: () => import("views/knowledge/index"),
    },

    // 登录页
    {
      path: "/login",
      component: () => import("views/login/index"),
    },

    // 我的页
    {
      path: "/my",
      component: () => import("views/my/index"),
    },
    {
      path: "/demo",
      component: () => import("views/demo/index"),
    },
  ],
  mode: "history",
});
