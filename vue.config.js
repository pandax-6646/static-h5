const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,

  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("api", resolve("src/api"))
      .set("views", resolve("src/views"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
  },

  // 打包后的文件以相对路径进行访问
  publicPath: "./",

  // 打包文件的输出路径
  outputDir: "web_dist",
};
