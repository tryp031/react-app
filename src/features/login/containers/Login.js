import { Row, Col } from "antd";

import LoginForm from "../components/LoginForm";
import LoginInfo from "../components/LoginInfo";

const Login = () => {
  return (
    <Row gutter={[8, 8]}>
      <Col xs={24} sm={24} md={24} lg={12}>
        <LoginForm />
      </Col>
      <Col xs={0} sm={0} md={0} lg={12}>
        <LoginInfo />
      </Col>
    </Row>
  );
};

export default Login;
