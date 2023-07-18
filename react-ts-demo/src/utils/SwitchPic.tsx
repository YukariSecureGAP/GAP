import ppic from "../assets/练习_1.png";
import ppic2 from "../assets/练习_2.png";
import React from "react";

interface SwitchPicState {
  isSwitch: boolean;
}

export class SwitchPic extends React.Component<{}, SwitchPicState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isSwitch: false,
    };
  }

  clickEvent = (e: any) => {
    e.preventDefault();
    this.setState((prevState) => ({
      isSwitch: !prevState.isSwitch,
    }));
  };

  render(): React.ReactNode {
    return (
      <div>
        <ul onClick={this.clickEvent}>
          <li>
            <a href="#">密码登录</a>
          </li>
          <li>
            <a href="#">短信登录</a>
          </li>
        </ul>
        <img src={this.state.isSwitch ? ppic : ppic2} alt="图片" />
        <div>
          {this.state.isSwitch? <span><a href="">forget Password</a>
            <a href="">forget username</a>
          </span>:''}
        </div>
        <a href="">sign up free</a>
      </div>
    );
  }
}
