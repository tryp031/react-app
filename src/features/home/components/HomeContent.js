import { Layout } from "antd";

import HomeBreadcrumb from "./HomeBreadcrumb";
import HomeFooter from "./HomeFooter";

const { Content } = Layout;

const HomeContent = ({ page = "", subPage = "" }) => {
  return (
    <>
      <Content style={{ padding: "0 50px" }}>
        <HomeBreadcrumb page={page} subPage={subPage} />
        <div className="site-layout-content">Content</div>
      </Content>
      <HomeFooter />
    </>
  );
};

export default HomeContent;
