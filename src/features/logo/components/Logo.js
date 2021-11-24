import { ToolOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";

const { Title } = Typography;

const Logo = ({ level, hideIcon, showText }) => {
  return (
    <>
      <Space>
        {showText !== null ? (
          <Title level={level} strong>
            {showText}
          </Title>
        ) : (
          ""
        )}
        <Title level={level} className="color-blue-komet" strong>
          {!hideIcon ? <ToolOutlined /> : ""}
          Komet
        </Title>
        <Title level={level} type="secondary" strong>
          Tools
        </Title>
      </Space>
    </>
  );
};

export default Logo;
