import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./", //当项目打包后需要部署在服务器的子目录时，可以对此配置访问路径。
  plugins: [react()], //添加插件，添加前需导入插件。
  css: {
    //配置 Antd Vue框架的主色调风格以及默认的圆角值。
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 'primary-color': '#8400dc', //配置主色调颜色1
          // 'link-color': '#8400dc', //配置主色调颜色2
          // 'border-radius-base': '6px', //配置默认的圆角值
        },
      },
    },
  },
  build: {
    outDir: "dist", //指定打包输出路径
    assetsDir: "assets", //指定静态资源存放路径
    cssCodeSplit: true, //css代码拆分，禁用则所有样式保存一个css里面
    sourcemap: false, //是否构建source map文件

    //生产环境取消 console
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    //打包出css js等文件，目录显示清晰
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
  },
  // 文件夹别名配置
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@views": path.resolve(__dirname, "src/views"),
      "@comp": path.resolve(__dirname, "src/components"),
      "@comm": path.resolve(__dirname, "src/common"),
      "@router": path.resolve(__dirname, "src/router"),
      "@axios": path.resolve(__dirname, "src/axios"),
      "@apis": path.resolve(__dirname, "src/apis"),
      "@stores": path.resolve(__dirname, "src/stores"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  //server - 对开发环境进行配置。
  server: {
    host: "localhost", //配置后运行项目会生成一个局域网访问路径
    cors: true,
    open: false, //是否弹出浏览器
    port: 3001, //端口号
    //配置跨域
    proxy: {
      "^/ls-boot": {
        target: `http://localhost.3000/ls-boot`, //实际请求地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ls-boot/, ""),
      },
    },
  },
});
