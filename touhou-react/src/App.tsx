import { useState } from "react";
import "./App.css";

function App() {


  
  const [count, setCount] = useState(0);
  const fn = () =>{
    console.log("clicked");
  }
  const counter = () => {
    var count = 0;
    function increase() {
      count++;
      console.log(count);
    }
    return increase;
  }
  var counter1 = counter()
  counter1()
  counter1()
  var counter2 = counter()
  counter2()
  counter2()
  return (
    //fragment  jsx语法  tsx  
    <>
      <p className="test" style={{ color: "red" }}>
        Hello World
      </p>
      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: "yellow",
        }}
        onClick={() => {
          console.log("clicked");
        }}
      ></div>
      <div>
        <label htmlFor="getName">name:</label>
        <input type="text" id="getName" />
        <button onClick={fn}>show</button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
