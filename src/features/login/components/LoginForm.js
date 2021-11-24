import { useState, useEffect } from "react";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import Logo from "../../logo/components/Logo";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUserName("");
    setPassword("");
  }, []);

  return (
    <div className="container-sing-in">
      <div className="sign-in-form">
        <Logo />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              value={userName}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              value={password}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Button className="blue-ks-button-rounded ks-button-rounded log-in">
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
            <Form.Item>
              <Button type="primary" className="width-100 ks-button-rounded">
                Login with Google
              </Button>
            </Form.Item>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
