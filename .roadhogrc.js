module.exports = {
  "extraBabelPlugins": [
    "transform-runtime",
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }],
  ],
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" },
    },
  },
};
