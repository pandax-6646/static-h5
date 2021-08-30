import Mock from "mockjs";

Mock.mock("knowledge/list", "get", {
  code: 200,
  msg: "success",
  result: {
    "konwledgeList|3": [
      {
        name: "@ctitle(3,4)",
        "list|3": [
          {
            dec: "@ctitle(5,25)",
            "imageUrls|3": ["@Image('110x75','@color','knowledge')"],
          },
        ],

        bigImg: "@Image('345x180','@color','knowledge')",
        langDec: "@ctitle(25,30)",
      },
    ],
  },
});
