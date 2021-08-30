import request from "./request";

// 登录页面请求
export const loginRequest = {
  /**
   * @param {*} params {phone, password}
   * @returns
   */
  logon: (params) => request.get("login/cellphone", params),
};

// 首页请求
export const homeRequest = {
  // 轮播图
  fetchHomeBanner: () => request.get("home/banner"),

  // 导航栏
  fetchHomeCategory: () => request.get("home/category"),

  // 列表数据
  fetchHomeList: () => request.get("home/list"),

  // 案例数据
  fetchHomeCaseList: () => request.get("home/case"),

  /**
   *详情页数据
   * @param {*} params id
   * @returns
   */
  fetchHomeDetail: (params) => request.get("home/detail", params),
};

// 案例页请求
export const caseRequest = {
  // 案例列表
  fetchCaseList: () => request.get("case/list"),
};

// 知识页请求
export const konwledgeRequest = {
  // 知识列表
  fetchKonwledgeList: () => request.get("knowledge/list"),
};
