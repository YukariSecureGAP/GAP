import { useEffect, useState } from "react";

function Clac() {
  const [num, setNum] = useState(2);
  const [num2, setNum2] = useState(1);
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setNum((a) => a * 2);
    setNum2(num2 ? num2 * 2 : 1);
  };
  const handleReduce = () => {
    setNum(num - 1);
    setNum2(num2 / num);
  };
  // const addNumber = () => {
  //   setNum(num + 1);
  // };
  useEffect(() => {
    // fetch("http://localhost:3000/lib", {
    //   method: "GET",
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setData(data);
    //   });

    (async () => {
      const res = await fetch("http://localhost:3000/lib", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data.data);
      setData(data.data);
    })();
  }, [data]);
  return (
    <>
      <p>num:{num}</p>
      <p>num2:{num2}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleReduce}>-</button>
      <ul>
        {data.map((item: any, index: number) => {
          return (
            <li key={index}>
              <span>{item.id}</span>
              <span>{item.name}</span>
              <span>{item.time}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export { Clac };
