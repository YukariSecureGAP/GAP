import { useRef, useState, useEffect } from "react";
import pic from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic4 from "../assets/3.jpg";
import pic3 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg";

const RollingPic = () => {
  const picArr: Array<string> = [pic, pic2, pic3, pic4, pic5];
  const [index, setIndex] = useState(0);
  const picRef = useRef<HTMLImageElement>(null);
  const [timer, setTimer] = useState(null as any | null);

  useEffect(() => {
    const newTimer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % picArr.length);
    }, 2000);

    setTimer(newTimer);

    return () => clearInterval(newTimer);
  }, [picArr.length]);

  const whenMouseOver = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const whenMouseOut = () => {
    if (!timer) {
      const newTimer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % picArr.length);
      }, 2000);

      setTimer(newTimer);
    }
  };

  const handleClick = (newIndex: number) => {
    setIndex(newIndex);
    //延时从当前图片开始播放
  };

  return (
    <div onMouseOver={whenMouseOver} onMouseOut={whenMouseOut}>
      <img src={picArr[index]} alt="" ref={picRef} />
      <div>
        <button onClick={() => handleClick(0)}>1</button>
        <button onClick={() => handleClick(1)}>2</button>
        <button onClick={() => handleClick(2)}>3</button>
        <button onClick={() => handleClick(3)}>4</button>
        <button onClick={() => handleClick(4)}>5</button>
      </div>
    </div>
  );
};

export default RollingPic;
