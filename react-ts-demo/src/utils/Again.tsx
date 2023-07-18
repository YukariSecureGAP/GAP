import React from "react";
import pic from "../assets/l1.png";
import pic2 from "../assets/l2.png";
export class ChangeBgColor extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      bgColor: "",
    };
  }
  clickEVent = (e:any) => {
    const i = e.target.innerText;
    console.log(e);
    if (i === "light") {
      this.setState({ bgColor: pic });
    } else if (i === "off") {
      this.setState({ bgColor: pic2 });
    } else {
      this.setState({ bgColor: "" });
    }
  };
  render() {
    // const { bgColor } = this.state;
    return (
      <div>
        {/* light则显示图片l2.png */}
        {/* off则显示图片l1.png */}
        {/* { bgColor && <img src={bgColor} alt="" /> } */}
        <button onClick={this.clickEVent}>light</button>
        <button onClick={this.clickEVent}>off</button>
        <button onClick={this.clickEVent}>recover</button>
      </div>
    );
  }
}
