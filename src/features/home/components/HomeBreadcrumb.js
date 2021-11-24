import { Breadcrumb } from "antd";

const HomeBreadcrumb = ({page = "", subPage = ""}) => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>{page}</Breadcrumb.Item>
      <Breadcrumb.Item>{subPage}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default HomeBreadcrumb;
