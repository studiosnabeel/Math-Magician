import React, { useState } from 'react';
import Calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleChange = (e) => {
    const res = Calculate(state, e.target.innerHTML);
    setState(res);
  };

  const { total, next, operation } = state;

  return (
    <div className="Calculator">
      <form className="row">
        <input
          disabled
          className="res"
          value={next || total || operation || 0}
        />
      </form>
      <div className="row">
        <button type="button" id="AC" onClick={handleChange} className="pads">
          AC
        </button>
        <button type="button" onClick={handleChange} id="+/-" className="pads">
          +/-
        </button>
        <button type="button" onClick={handleChange} id="%" className="pads">
          %
        </button>
        <button type="button" onClick={handleChange} className="pads">
          &#247;
        </button>
      </div>
      <div className="row">
        <button className="pads" type="button" onClick={handleChange}>
          7
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          8
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          9
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          x
        </button>
      </div>
      <div className="row">
        <button className="pads" type="button" onClick={handleChange}>
          4
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          5
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          6
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          -
        </button>
      </div>
      <div className="row">
        <button className="pads" type="button" onClick={handleChange}>
          1
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          2
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          3
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          +
        </button>
      </div>
      <div className="row">
        <button className="pads zero" type="button" onClick={handleChange}>
          0
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          .
        </button>
        <button className="pads" type="button" onClick={handleChange}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
