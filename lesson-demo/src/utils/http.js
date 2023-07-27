import axios from "axios";
import { getToken } from "./auth";
import { message, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

message.config({
  top: 200,
  duration: 2,
  maxCount: 1,
});

const instance = axios.create({
  baseURL: "http://yzsys.natapp1.cc/",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers["Authorization"] = "Bearer" + getToken();
    }
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 返回正确结果
    const { status, message: msgContent, data } = response;

    if (status < 200 || status > 300) {
      message.error({
        content: msgContent,
      });
      return Promise.reject("error");
    } else {
      // 返回正确数据
      return data;
    }
  },
  (error) => {
    // 请求异常

    let code = 0;
    try {
      code = error.response.data.status;
    } catch (error) {
      if (error.toString().indexOf("Error: timeout") !== -1) {
        message.error({
          content: "网络请求超时",
          duration: 2.5,
        });
        return Promise.reject(error);
      }
      if (error.toString().indexOf("Error: Network Error") !== -1) {
        message.error({
          content: "网络请求错误",
          duration: 2.5,
        });
        return Promise.reject(error);
      }
    }
    if (code === 401) {
      Modal.confirm({
        title: "系统提示",
        icon: <ExclamationCircleFilled />,
        content: "登录状态已过期，您可以继续留在该页面，或者重新登录",
        okText: "重新登录",
        cancelText: "取消",
        onOk: () => {
          //   store.dispatch('LogOut').then(() => {
          //     location.reload() // 为了重新实例化vue-router对象 避免bug
          //   })
        },
      });
    } else if (code === 403) {
      window.location.href = `${window.location.origin}/401`;
    } else {
      const errorMsg = error.response

      if (errorMsg !== undefined) {
        message.error({
          content: errorMsg,
          duration: 3,
        });
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
