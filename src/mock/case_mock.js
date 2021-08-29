import Mock from 'mockjs'


// 案例页数据
Mock.mock("case/list", "get", {
  code: 200,
  msg: "success",
  result: {
    'list|8': [{
      "title": "@ctitle()",
      'imageUrl': "@Image('170x165','@color','list')"
    }],
  }
})