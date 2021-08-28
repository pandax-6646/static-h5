import Mock from "mockjs";
import qs from "querystring";

// 轮播图数据
Mock.mock("home/banner", "get", {
  code: 666,
  msg: "success",
  "banners|3-5": ["@Image('375x210','@color','小甜甜')"],
});
