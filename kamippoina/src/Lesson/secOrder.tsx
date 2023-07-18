import React from "react";

class ChildComponent extends React.Component {
  render() {
    const { name, age } = this.props as { name: string; age: number };
    return (
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
      </div>
    );
  }
}
const HighOrderComponent = (WrappedComponent: any) => {
  return class extends React.Component {
    render() {
      const defaultProps = {
        name: "Hello world!",
        age: 18,
      };
      return (
        <div style={{ display: "inline-block", backgroundColor: "azure" }}>
          <WrappedComponent {...defaultProps} {...this.props} />
        </div>
      );
    }
  };
};

const NewComponent = HighOrderComponent(ChildComponent);
export const Hoc = () => {
  return (
    <div>
      <NewComponent />
    </div>
  );
};
