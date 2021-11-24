import { Layout } from "antd";

import HomeHeader from "../components/HomeHeader";
import HomeContent from "../components/HomeContent";

const HomeContainer = () => {
  return (
    <Layout className="layout">
      <HomeHeader />
      <HomeContent />
    </Layout>
  );
};

export default HomeContainer;
