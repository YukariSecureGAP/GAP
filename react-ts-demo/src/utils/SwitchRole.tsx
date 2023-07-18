import React from "react";
import role1 from "../assets/lyh.jpg";
import role2 from "../assets/mht.jpg";
import role4 from "../assets/my.jpg";
import role5 from "../assets/rzf.jpg";

const Roles = [role1, role2, role4, role5];

class SwitchRole extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      role: Roles,
      index: 0,
    };
  }
  //抽离li标签
  LLi = () => {
    const { role, index } = this.state as { role: string[], index: number };
    return (
      <li>
        <img src={role[index]} alt="" />
      </li>
    );
  };
  changeRole = (index: number) => {
    this.setState({ index });
  };
  render() {
    return (
      <div className="roless">
        <button onClick={() => this.changeRole(0)}>Role1</button>
        <button onClick={() => this.changeRole(1)}>Role2</button>
        <button onClick={() => this.changeRole(2)}>Role3</button>
        <button onClick={() => this.changeRole(3)}>Role4</button>
        <ul>{this.LLi()}</ul>
      </div>
    );
  }
}

export default SwitchRole;
