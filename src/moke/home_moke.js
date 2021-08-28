import Mock from "mockjs";



// 轮播图数据
Mock.mock("home/banner", "get", {
  code: 200,
  msg: "success",
  result: {
    "banners|5-8": ["@Image('375x210','@color','小甜甜')"],
  }
});
