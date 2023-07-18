import React from "react";
export const Colorr = () => {
  interface isChange {
    change: boolean;
  }
  interface ColorObject {
    color1: string;
    color2: string;
  }

  class TTTRy extends React.Component<
    { color1?: string; color2?: string },
    isChange
  > {
    timer: any = null;
    constructor(props: ColorObject) {
      super(props);
      this.state = {
        change: true,
      };
      this.timer = null;
    }
    render() {
      const { color1, color2 } = this.props;
      const { change } = this.state;
      return (
        <div
          className="circle"
          style={{ backgroundColor: change ? color1 : color2 }}
        ></div>
      );
    }
    //颜色通过change改变
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState({
          change: !this.state.change,
        });
      }, 1000);
    }
    componentWillUnmount(): void {
      clearInterval(this.timer);
    }
  }
  return (
    <div>
      <TTTRy color1="red" color2="blue"></TTTRy>
      <TTTRy color1="black" color2="#f0a"></TTTRy>
      <TTTRy color1="rgb(104,104,104)" color2="red"></TTTRy>
      <TTTRy color1="green" color2="#0a81a0"></TTTRy>
      <TTTRy color1="#0fa" color2="#a10"></TTTRy>
      <TTTRy color1="#afa" color2="#12af10"></TTTRy>
    </div>
  );
};
