import { Layout, Menu } from "antd";
import Logo from "../../logo/components/Logo";

const { Header } = Layout;

const HomeHeader = () => {
  return (
    <Header>
      <div className="logo">
        <Logo level={5} />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
  );
};

export default HomeHeader;
