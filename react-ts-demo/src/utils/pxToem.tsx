import React from "react";

interface ConvertToRemProps {
  defaultPx: number;
  unit: string;
  px: number;
  rem: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class ConvertToRem extends React.Component<ConvertToRemProps> {
  render() {
    const { defaultPx, unit, px, rem, handleInputChange } = this.props;

    return (
      <div>
        <label>
          Default {unit}:
          <input type="text" onChange={handleInputChange} value={defaultPx} />
        </label>
        <br />
        <label>
          PX:
          <input type="text" onChange={handleInputChange} value={px} />
        </label>
        <br />
        <label>
          REM:
          <input type="text" readOnly value={rem} />
        </label>
      </div>
    );
  }
}

interface PxToRemState {
  px: string;
  rem: string;
  defaultPx: number;
  unit: string;
}

class PxToRem extends React.Component<{}, PxToRemState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      px: "",
      rem: "",
      defaultPx: 16,
      unit: "px",
    };
  }

  // set the default px, rem will be calculated according to this value
  setDefault = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ defaultPx: parseFloat(value), unit: "px" });
  };

  // calculate rem according to px
  convertToRem = (px: number) => {
    const baseFontSize = parseFloat(this.state.defaultPx.toString());
    const rem = px / baseFontSize;
    return rem.toFixed(2);
  };

  // handle input change
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const px = parseFloat(value);
    if (!isNaN(px)) {
      const rem = this.convertToRem(px);
      this.setState({ px: value, rem: rem });
    } else {
      this.setState({ px: value, rem: "" });
    }
  };

  render() {
    const { defaultPx, unit, px, rem } = this.state;

    return (
      <div>
        <ConvertToRem
          defaultPx={defaultPx}
          unit={unit}
          px={parseFloat(px)}
          rem={rem}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <p style={{ fontSize: rem + "rem" }}>test</p>
      </div>
    );
  }
}

export default PxToRem;
