import React from "react";
import { Input, Form, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useLogin } from "./useLogin";

const Login: React.FC = () => {
  const { handleCode, img, handleFinish, initialValues } = useLogin();
  return (
    <div
      style={{
        padding: "0",
        margin: "0",
      }}
    >
      <Form
        initialValues={initialValues}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <h3
          style={{
            textAlign: "center",
          }}
        >
          YZ-SYS 后台管理系统
        </h3>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "用户名不能为空" }]}
        >
          <Input
            style={{ width: "100%" }}
            prefix={<UserOutlined />}
            placeholder="账号"
            value={""}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "密码不能为空" }]}
        >
          <Input.Password
            style={{ width: "100%" }}
            prefix={<LockOutlined />}
            placeholder="密码"
            value=""
          />
        </Form.Item>
        <div style={{ display: "flex" }}>
          <Form.Item
            name="code"
            rules={[{ required: true, message: "验证码不能为空" }]}
          >
            <Input
              placeholder="验证码"
              style={{ width: "100%" }}
              prefix={<SafetyCertificateOutlined />}
              value=""
            />
          </Form.Item>
          <img
            src={img}
            alt="failed to load resource"
            onClick={handleCode}
            style={{ width: "7vw", height: "4vh", paddingLeft: "1vw" }}
          />
        </div>
        <Form.Item name="rememberMe" valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
