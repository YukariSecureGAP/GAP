const CracoLessPlugin = require("craco-less");
const webpack = require("webpack");
const path = require("path");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "src"),
      "@assets": path.join(__dirname, "src/assets"),
      "@views": path.join(__dirname, "src/views"),
      "@comp": path.join(__dirname, "src/components"),
      "@comm": path.join(__dirname, "src/common"),
      "@router": path.join(__dirname, "src/router"),
      "@axios": path.join(__dirname, "src/axios"),
      "@apis": path.join(__dirname, "src/apis"),
      "@stores": path.join(__dirname, "src/stores"),
      "@utils": path.join(__dirname, "src/utils"),
    },
    plugins: [new SimpleProgressWebpackPlugin()],
  },
  //按需引入
  babel: {
    plugins: [
      [
        "import",
        { libraryName: "antd", libraryDirectory: "es", style: true },
        "antd",
      ],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["babel-plugin-styled-components", { displayName: true }],
    ],
    loaderOptions: {},
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          useBuiltIns: "entry",
          corejs: {
            version: 3,
            proposals: true,
          },
        },
      ],
    ],
  },
  //自定义主题
  plugins: [
    // 配置 babel-plugin-import
    {
      plugin: CracoLessPlugin,
      options: {
        // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        lessLoaderOptions: {
          lessOptions: {
            //颜色即为自定义颜色
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
  },
};
