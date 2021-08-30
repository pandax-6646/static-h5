import Mock from "mockjs";

Mock.mock("my/getSmsCode", "post", {
  code: 200,
  msg: "success",
  result: {
    smsCode: "@increment(3213)",
  },
});

Mock.mock("my/login", "post", {
  code: 200,
  msg: "success",
  result: {
    phone: "18800001111",
    token: "@guid()",
  },
});

Mock.mock("my/logout", "get", {
  code: 200,
  msg: "success",
  result: [],
});
