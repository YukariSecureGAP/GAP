import { Login } from "@/utils/http";
import { useState } from "react";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "@/assets/Style/User/User.less";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userAccount, setAccount] = useState<string>("");
  return (
    <div className="root">
      <div className="Container">
        <div className="background">
          <div className="satellite">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="opcContent">
          <div className="Text">Login</div>
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
                // style={{ width: "16.3vw" }}
                prefix={<UserOutlined />}
                className="inputbox"
                placeholder="用户名"
                value={""}
                bordered={false}
                allowClear={true}
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
                className="inputbox"
                prefix={<UserOutlined />}
                placeholder="账号"
                value={""}
                bordered={false}
                allowClear={true}
                onChange={(e: any) => {
                  setAccount(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password
                className="inputbox"
                prefix={<LockOutlined />}
                placeholder="密码"
                value=""
                bordered={false}
                allowClear={true}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Item>
            <button
              onClick={() => {
                Login(username, password, userAccount);
              }}
            >
              →
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
