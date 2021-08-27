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
