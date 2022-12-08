/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, operator: '', operand: 0 };
  }

  handleChange = (e) => {
    const op = e.target.innerHTML;
    this.setState({ operand: op });
  };

  handleOperator = (e) => {
    this.setState({ operator: e.target.innerHTML });
    this.reset();
  };

  reset = () => {
    this.setState({ result: 0 });
  };

  render() {
    return (
      <div className="Calculator">
        <form className="row">
          <input
            disabled
            className="res"
            value={this.state.operand}
            onChange={(e) => {
              this.setState({ operand: e.target.value });
            }}
          />
        </form>
        <div className="row">
          <button
            type="button"
            id="AC"
            onClick={() => this.setState({ result: 0 })}
            className="pads"
          >
            AC
          </button>
          <button
            type="button"
            onClick={(e) => this.handleOperator(e)}
            id="+/-"
            className="pads"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={(e) => this.handleOperator(e)}
            id="%"
            className="pads"
          >
            %
          </button>
          <button
            type="button"
            onClick={(e) => this.handleOperator(e)}
            className="pads"
          >
            &#247;
          </button>
        </div>
        <div className="row">
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            7
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            8
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            9
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleOperator(e)}
          >
            x
          </button>
        </div>
        <div className="row">
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            4
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            5
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            6
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleOperator(e)}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            1
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            2
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            3
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleOperator(e)}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            className="pads zero"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            0
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleChange(e)}
          >
            .
          </button>
          <button
            className="pads"
            type="button"
            onClick={(e) => this.handleOperator(e)}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
