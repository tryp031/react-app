import Logo from "../../logo/components/Logo";

const LoginInfo = () => {
  return (
    <div className="log-in-float-right">
      <div className="container-login-info"></div>
      <div className="login-image">
        <Logo level={1} showText="Welcome To" hideIcon={true} />
      </div>
    </div>
  );
};

export default LoginInfo;
