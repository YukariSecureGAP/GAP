import { Tag } from "antd";
import { WechatFilled } from "@ant-design/icons";
import { QRCode } from "antd";
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
      <QRCode value={content} size={200} />
    </span>
  </span>
);

// Usage
const MyWechat = () => {
  return <CustomTooltip content={WechatQrcode}>Wechat</CustomTooltip>;
};

export default MyWechat;
