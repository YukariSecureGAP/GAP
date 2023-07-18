import { useState } from "react";

const useInput = (initialValue = ""): [string, (e: any) => void] => {
  const [val, setValue] = useState(initialValue);
  const handleChange = (e: any) => {
    const { value } = e.target || {};
    let val = value.replace(/[^\d]/g, "");
    if (val > 100 || val < 0) {
      // 自动设置为100或0
      val = val > 100 ? 100 : 0;
    }
    setValue(val);
  };

  return [val, handleChange];
};

const InputNumber = () => {
  const [val, handleChange] = useInput("");
  return <input type="text" value={val} onChange={(e) => handleChange(e)} />;
};
export default InputNumber;
