import Style from "../../assets/login/login.module.less";
import { TitleBar } from "../../components";
import { Form, Input, Switch, Button } from "antd";
import { useLogin } from "./useLogin";
export const Login = () => {
  //调用useLogin
  const { onFinish,initialValues,clickFnTest } = useLogin();
  return (
    <>
      <div className={Style["root"]}>
        <TitleBar titleText="登录" />
        <Form
          className={Style["form"]}
          name="basic"
          onFinish={clickFnTest}
          initialValues={initialValues}
          autoComplete="off"
        >
          <Form.Item
            name="memberId"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input prefix="账号" size="large" allowClear />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入用户密码!" }]}
          >
            <Input.Password prefix="密码" size="large" allowClear />
          </Form.Item>
          <div className={Style["auto-login-box"]}>
            <span>自动登录</span>
            <Form.Item name="autoLogin" valuePropName="checked">
              <Switch />
            </Form.Item>
          </div>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
