import Mock from "mockjs";

import "./home_mock";
import './case_mock';


// 响应数据时间延迟
Mock.setup({
  timeout: "1000-5000",
});
