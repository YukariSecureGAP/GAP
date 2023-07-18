import Style from "../../assets/titleBar/titleBar.module.less"
import { AllTypes } from "../../DataTypes/DataType";
export const TitleBar = ({ titleText }: AllTypes.TitleBar) => {
  return (
    <header className={Style["root"]}>
      <h1>{titleText}</h1>
    </header>
  );
};
