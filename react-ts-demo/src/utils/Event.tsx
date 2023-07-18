import { gsap } from "gsap";
import { useRef } from "react";

export const MovingBox = () => {
  const box = useRef(null);
  //if pause is true, the animation will pause
  const play = () => {
    gsap.to(box.current, { x: 1180, duration: 4, yoyo: true });
  };
  //点击pause按钮，动画暂停
  const pauseAnimation = () => {
    gsap.to(box.current, { paused: true });
  };

  return (
    <>
      <div>
        <div className="box" ref={box}></div>
        <button onClick={play}>play</button>
        <button onClick={pauseAnimation}>pause</button>
      </div>

      <div className="Origin"></div>
    </>
  );
};
