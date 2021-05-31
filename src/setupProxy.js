const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/result",
    createProxyMiddleware({
      target: "https://randomuser.me/api/",
      changeOrigin: true,
    })
  );
};
