import React from 'react';

const City = (props) => {
  return (
    <div>
      <label htmlFor="select">
        <span className="label">City</span>

        <div className="city__wrapper">
          <select id="select" className="city__select">
            {props.options.map((option) => (
              <option key={option.id} value={option.value} name={option.value}>
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

export default City;
