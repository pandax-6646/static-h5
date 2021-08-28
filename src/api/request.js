import axios from "axios";
import { Toast } from "vant";
// import store from "@/store/index";

//  创建axios 实例
const service = axios.create({
  //  配置 baseURL
  baseURL: process.env.VUE_APP_URL,

  //  请求超时时间
  timeout: 60 * 1000,
});

//  请求拦截
service.interceptors.request.use(
  (config) => {
    //  配置 请求拦截中的 token 是添加 Authorization 还是添加 user-token 取决于后台的设置
    //  config.headers['user-token'] = store.state.user.token;
    // config.headers.Authorization = store.state.user.token;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//  响应拦截
service.interceptors.response.use(
  // 成功响应
  (res) => res.data.result,

  // 失败响应
  (err) => {
    Toast.fail('请求失败，请稍后重试');
    console.log(err)
  }
);

const get = (url, data = {}) => {
  return service.get(url, {
    params: data,
  });
};

const post = (url, data = {}) => {
  return service.post(url, data);
};

//  导出
export default {
  get,
  post,
};
