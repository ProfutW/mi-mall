module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://cn.vuejs.org/v2",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
