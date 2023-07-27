import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Space, Tag } from "antd";
import MyWechat from "@/utils/tooltips";

const ContactMe: React.FC = () => (
  <div
    style={{
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, 0)",
    }}
  >
    <Space size={[0, 8]} wrap>
      <Tag
        icon={<TwitterOutlined />}
        color="#55acee"
        onClick={() => {
          window.open("https://twitter.com/CarolineCelia3");
        }}
      >
        Twitter
      </Tag>
      <Tag
        icon={<YoutubeOutlined />}
        color="#cd201f"
        onClick={() => {
          window.open("https://www.youtube.com/");
        }}
      >
        Youtube
      </Tag>
      <Tag
        icon={<FacebookOutlined />}
        color="#3b5999"
        onClick={() => {
          window.open(
            "https://www.facebook.com/profile.php?id=100016643978660"
          );
        }}
      >
        Facebook
      </Tag>
      <MyWechat />
    </Space>
  </div>
);

export default ContactMe;
