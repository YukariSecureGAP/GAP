import { Constants, API_BASE_URL } from "@/utils/constants";
import { getAllComics } from "@/utils/http";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "@/assets/placeholder.jpg";
import "@/assets/Style/Comic/Comic.less";
const Comics = () => {
  const [comics, setComics] = useState<Constants.ComicInfo[]>([]);

  useEffect(() => {
    // 获取所有漫画的路径信息
    getAllComics()
      .then((comics: Constants.ComicInfo[]) => {
        setComics(comics);
      })
      .catch((error: any) => {
        console.error("Error fetching comics:", error);
      });
  }, []);

  return (
    <div className="Comics">
      <div>
        <span></span>
      </div>
      {comics.map((comic: Constants.ComicInfo) => {
        return (
          <div
            key={comic.comicName}
            style={{ width: "30vw", height: "80vh", marginTop: "25vh"}}
          >
            <LazyLoadImage
              key={comic.comicName}
              // width={200}
              // height={200}
              src={`${API_BASE_URL}${comic.comicPath}`}
              placeholderSrc={placeholder}
              effect="blur"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
