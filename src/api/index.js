import request from "./request";

// 登录页面请求
export const loginRequest = {
  /**
   *
   * @param {*} params {phone, password}
   * @returns
   */
  logon: (params) => request.get("login/cellphone", params),
};



// 首页请求
export const homeRequest = {

  // 首页轮播图
  fetchHomeBanner: () => request.get('home/ba/nner')
}