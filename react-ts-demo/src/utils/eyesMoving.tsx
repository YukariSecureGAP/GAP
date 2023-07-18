import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const MovingEyes = () => {
  // const [isMoving, setIsMoving] = useState(false);
  const eyes = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null); // add union type
  // const eyesCount = Math.floor(Math.random() * 3 + 5); // 随机数量
  useEffect(() => {
    const moveEyes = () => {
      gsap.to(eyes.current, {
        x: Math.random() * 20 - 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    };

    const startTimer = () => {
      const time = Math.random() * 5000 + 1000; // 随机时间
      timer.current = window.setTimeout(() => { // use window.setTimeout
        moveEyes();
        startTimer();
      }, time);
    };

    startTimer();

    return () => {
      if (timer.current !== null) { // add null check
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    // 随机位置
    <div>
      <div
        className="eyesa"
        style={{ left: Math.random() * 1500, top: Math.random() * 1000 }}
      >
        <div className="eyes" ref={eyes}></div>
      </div>
    </div>
  );
};
