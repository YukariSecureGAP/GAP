import axios from "axios";
import { message } from "antd";
import "../../assets/defaultStyle.less"
message.config({
  duration: 2,
  maxCount: 1,
  top: 300,
  prefixCls: "my-msg",
});

// 创建 Axios 实例
export const http = axios.create({
  timeout: 1000,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    message.loading("正在加载");

    return config;
  },
  (error) => {
    console.log(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    message.destroy();
    const { data } = response;
    
    return data;
  },
  (error) => {
    console.log(error);
  }
);
