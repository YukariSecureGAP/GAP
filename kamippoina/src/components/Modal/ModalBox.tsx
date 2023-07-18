import { Modal } from "antd";
import Style from "../../assets/Modal/Modal.module.less";
import { AllTypes } from "../../DataTypes/DataType";

export const ModalBox = {
  info() {},
  success() {},
  error() {},
  warning({
    title = "attention",
    content,
    okText = "confirm",
  }: AllTypes.ModalContent) {
    Modal.warning({
      title,
      className: Style["root"],
      content: <div className={Style["content"]}>{content}</div>,
      okButtonProps: {
        block: true,
        className: Style["ok-button"],
        size: "large",
      },
      okText,
      centered: true,
      closeIcon: <></>,
    });
  },
  confirm() {},
};
