/**
 * @Author: Yukaridesu
 * @Description: 主页
 */

import { useEffect, useState } from "react";
import { getAllImages } from "@/utils/http";
import { Constants, API_BASE_URL } from "@/utils/constants";
import "../assets/Style/Home/Img.less";
import { Skeleton,Button } from "antd";
import ContactMe from "./ContactMe";
import { TitleBar } from "./Title";
import Navgation from "./Nav/Nav";

const Home = () => {
  const [images, setImages] = useState<Constants.ImageInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    // 获取所有图片的路径信息
    getAllImages()
      .then((images: Constants.ImageInfo[]) => {
        setImages(images);
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.error("Error fetching images:", error);
        setIsLoading(false);
      });
  }, []);

  const handleMouseEnter = () => {
    setIsShow(true);
  };
  const handleMouseLeave = () => {
    setIsShow(false);
  };

  return (
    <>
      {
        // 加载中
        isLoading ? (
          <Skeleton active />
        ) : (
          <>
            <div className="root">
              <div
                className="content"
                style={{ height: "17vh" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <TitleBar titleText="Yukari's GAP" />
                <Navgation isShow={isShow} />
                <div className="login">
                  <Button type="primary" href="/login" style={{
                    marginRight: "10px"
                  }}>
                    登录
                  </Button>
                  <Button type="primary" href="/register">
                    注册
                  </Button>
                </div>
              </div>
              {images.map((image: Constants.ImageInfo) => (
                <div key={image.imageName}>
                  <div
                    className="rollingBackground"
                    style={{
                      backgroundImage: `url(${API_BASE_URL}${image.imagePath})`,
                    }}
                  ></div>
                  <div className="content"></div>
                </div>
              ))}
              <ContactMe />
            </div>
          </>
        )
      }
    </>
  );
};

export default Home;
