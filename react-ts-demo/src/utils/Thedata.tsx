import React from "react";

interface DataInfo {
  name: string;
  score: number;
}
interface State {
  data: DataInfo[];
  faild: DataInfo[];
  totalScore: number;
}
class SelectFail extends React.Component<{},State> {
  constructor(props:{}) {
    super(props);
    this.state = {
      data: [
        { name: "张三", score: 59 },
        { name: "李四", score: 61 },
        { name: "王五", score: 55 },
        { name: "赵六", score: 80 },
      ],
      faild: [],
      totalScore: 0,
    };
  }
  //抽离li标签
  LLi = () => {
    return this.state.data.map((item: DataInfo, index: number) => {
      return (
        <li key={index}>
          {item.name} {item.score}
        </li>
      );
    });
  };
  changeRole = () => {
    let faild = this.state.data.filter((item: DataInfo) => {
      return item.score > 60;
    });
    this.setState({ faild });
  };
  //抽离li标签 过滤后的数组显示
  Faili = () => {
    return this.state.faild.map((item: DataInfo, index: number) => {
      return (
        <li key={index}>
          {item.name} {item.score}
        </li>
      );
    });
  };
  //点击过滤后的数组求和并显示
  componentDidMount() {
    let totalScore = this.state.faild.reduce((prev: number, cur: DataInfo) => {
      return prev + cur.score;
    }, 0);
    this.setState({ totalScore });
  }

  render() {
    return (
      <div>
        <button onClick={this.changeRole}>asd</button>
        <ul>{this.LLi()}</ul>
        <ul>{this.Faili()} </ul>
      </div>
    );
  }
}

export default SelectFail;
