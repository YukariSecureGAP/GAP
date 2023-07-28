import { Register } from "@/utils/http";
import { useState } from "react";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "@/assets/Style/User/User.less";

const RegisterPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userAccount, setUserAccount] = useState<string>("");
  const authorization = "";
  return (
    <div className="root">
      <div className="Container">
        <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <div className="satellite">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="opcContent">
        <div className="Text">Register</div>
          <Form
            initialValues={{ username, password }}
            onFinish={() => {}}
            autoComplete="off"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "用户名不能为空" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="用户名"
                value={""}
                bordered={false}
                allowClear={true}
                className="inputbox"
                onChange={(e: any) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              name="userAccount"
              rules={[{ required: true, message: "账号不能为空" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="账号"
                value={""}
                bordered={false}
                allowClear={true}
                className="inputbox"
                onChange={(e: any) => {
                  setUserAccount(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "密码不能为空" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="密码"
                value=""
                bordered={false}
                allowClear={true}
                className="inputbox"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Item>
            <button
              onClick={() => {
                Register(username, password, authorization, userAccount);
              }}
            >
              注册
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
