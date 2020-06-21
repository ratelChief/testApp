import React from 'react';

const Price = (props) => {
  return (
    <div className="slider">
      <label htmlFor="range">
        <span className="label">Price</span>

        <input
          className="slider--input"
          defaultValue={props.max}
          id="range"
          max={props.max}
          min={props.min}
          type="range"
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

export default Price;
