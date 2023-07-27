import {Register} from "@/utils/http";
import { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const RegisterPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Form
      initialValues={{ username, password }}
      onFinish={() => {}}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "用户名不能为空" }]}
      >
        <Input
          style={{ width: "100%" }}
          prefix={<UserOutlined />}
          placeholder="账号"
          value={""}
          onChange={(e: any) => {
            console.log(e.target.value);
            setUsername(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "密码不能为空" }]}
      >
        <Input.Password
          style={{ width: "50%" }}
          prefix={<LockOutlined />}
          placeholder="密码"
          value=""
          onChange={(e: any) => {
            console.log(e.target.value);
            setPassword(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "50%" }}
          onClick={() => {
            Register(username, password);
          }}
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegisterPage;
