import Mock from "mockjs";


// 轮播图数据
Mock.mock("home/banner", "get", {
  code: 200,
  msg: "success",
  result: {
    "banners|5-8": ["@Image('375x485','@color','swipe')"],
  }
});



// 头部分类数据
Mock.mock("home/category", "get", {
  code: 200,
  msg: "success",
  result: {
    'category|10': [{
      "title": "@ctitle(2)",
      'imageUrl': "@Image('50x50','@color','category')"
    }],
  }
});



// 列表数据
Mock.mock("home/list", "get", {
  code: 200,
  msg: "success",
  result: {
    'list|5': [{
      "title": "@ctitle()",
      "titleE": "@name()",
      "products|3": [{
        "dec": "@ctitle()",
        'imageUrl': "@Image('118x165','@color','list')"
      }
      ],

    }],
  }
})



// 案例数据
Mock.mock("home/case", "get", {
  code: 200,
  msg: "success",
  result: {
    'caseList|3': [{
      "title": "@ctitle()",
      'imageUrl': "@Image('375x235','@color','case')"
    }],
  }
})