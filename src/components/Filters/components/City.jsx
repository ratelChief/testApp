import React, { memo } from 'react';

const City = (props) => {
  return (
    <div>
      <label htmlFor="select">
        <span className="label">City</span>

        <div className="city__wrapper">
          <select
            id="select"
            className="city__select"
            value={props.value}
            onChange={props.onChange}
          >
            <option value={0} name="" />
            {props.options.map((option) => (
              <option key={option.id} value={option.id} name={option.value}>
                {option.name}
              </option>
            ))}
          </select>

          <span className="select__icon" />
        </div>
      </label>
    </div>
  );
};

export default memo(City);
