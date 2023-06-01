const path = require('path');

module.exports = {
  // development更快的构建速度、更容易的调试、更有用的日志提示和错误信息
  mode: 'development',
  // 表示编译目标在web环境运行的代码
  target: 'web',
  devServer: {
    // 默认浏览器
    open: 'google-chrome',
    // 默认端口
    port: 9000,
    // 指定静态文件的根目录
    contentBase: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'dist'),
    ],
    // 监控静态文件的变化并自动刷新网页
    watchContentBase: true,
    // 启用浏览器自动刷新
    liveReload: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve("sass"),
            },
          },
        ],
      },
    ],
  },
};