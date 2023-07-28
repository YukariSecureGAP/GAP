import { Tag } from "antd";
import { WechatFilled } from "@ant-design/icons";
import WechatQrcode from "@/assets/Contact/weChat.jpg";
import "@/assets/Style/tooltip.less"

interface CustomTooltipProps {
  content: string;
  children: string;
}

const CustomTooltip = ({ content, children }:CustomTooltipProps) => (
  <span className="tooltip">
    <Tag icon={<WechatFilled />} color="#89D961">
      {children}
    </Tag>
    <span className="tooltiptext">
      <img src={content} style={{width:"200px",height:"200px"}} />
    </span>
  </span>
);

// Usage
const MyWechat = () => {
  return <CustomTooltip content={WechatQrcode}>Wechat</CustomTooltip>;
};

export default MyWechat;
