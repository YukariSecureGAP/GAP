import React, { Component } from "react";

interface Props {}

interface State {
  selected: Array<any>;
  isCheck: boolean;
  removeAll: boolean;
  goBack: boolean;
  currentTitleIndex: number;
  selfIntroduction: string;
}

class RouterJump extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: [],
      isCheck: false,
      removeAll: false,
      goBack: false,
      currentTitleIndex: 0,
      selfIntroduction: "",
    };
  }

  genderData = [
    { id: 1, gender: "男" },
    { id: 2, gender: "女" },
    { id: 3, gender: "保密" },
  ];

  hobbiesData = [
    { id: 1, hobbies: "看书" },
    { id: 2, hobbies: "游泳" },
    { id: 3, hobbies: "跑步" },
    { id: 4, hobbies: "看电影" },
  ];

  title = [
    { id: 1, title: "请问你的性别是？", data: this.genderData },
    { id: 2, title: "请问你的爱好是？", data: this.hobbiesData },
    { id: 3, title: "请介绍一下自己" },
  ];

  handlePrev = () => {
    this.setState((prevState) => ({
      currentTitleIndex: prevState.currentTitleIndex - 1,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentTitleIndex: prevState.currentTitleIndex + 1,
    }));
  };

  handleReset = () => {
    this.setState({
      selected: [],
      isCheck: false,
      removeAll: false,
      goBack: false,
      currentTitleIndex: 0,
      selfIntroduction: "",
    });
  };

  handleSubmit = () => {
    const { selected, selfIntroduction } = this.state;
    alert(
      `你的性别是：${selected[0]}，你的爱好是：${selected[1]}，你的自我介绍是：${selfIntroduction}`
    );
  };

handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    if (checked) {
        this.setState({
            selected: [value],
        });
    } else {
        this.setState({
            selected: [],
        });
    }
};

  handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    this.setState({
      selfIntroduction: value,
    });
  };

  render() {
    const { currentTitleIndex } = this.state;
    const currentTitle = this.title[currentTitleIndex];

    return (
      <div className="boxData">
        <form action="">
          <div className="title">{currentTitle.title}</div>
          {currentTitleIndex === this.title.length - 1 ? (
            <textarea
              value={this.state.selfIntroduction}
              onChange={this.handleTextareaChange}
            />):''}
          <button
            type="button"
            className="btn1"
            onClick={this.handlePrev}
            disabled={currentTitleIndex === 0}
          >
            上一步
          </button>
          <button
            type="button"
            className="btn2"
            onClick={this.handleNext}
            disabled={
              currentTitleIndex === this.title.length - 1 ||
              this.state.selected.length === 0
            }
          >
            下一步
          </button>
          <button type="button" className="btn3" onClick={this.handleReset}>
            重置
          </button>
          <button
            type="button"
            className="btn4"
            onClick={this.handleSubmit}
            disabled={
              currentTitleIndex !== this.title.length - 1 ||
              this.state.selfIntroduction === ""
            }
          >
            提交
          </button>
        </form>
      </div>
    );
  }
}

export default RouterJump;
