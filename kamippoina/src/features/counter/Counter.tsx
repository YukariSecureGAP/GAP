import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
export const Counter = () => {
  const [amout, setAmout] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>increment</button>
      <input type="text" value={amout} onChange={(e:any) => setAmout(e.target.value)} />
      <button onClick={() => {dispatch(incrementByAmount(Number(amout)))}}>confrim</button>
    </div>
  );
};
