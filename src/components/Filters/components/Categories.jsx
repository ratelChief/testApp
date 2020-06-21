import React from 'react';

const Categories = (props) => {
  return (
    <div>
      <span className="label">Categories</span>

      {props.checkboxes.map((checkbox) => (
        <label htmlFor={checkbox.id} key={checkbox.id} className="categories__label">
          <input
            type="checkbox"
            id={checkbox.id}
            name={checkbox.name}
            value={checkbox.id}
            className="categories__input"
          />

          {checkbox.name}
          <span className="categories__checkbox" />
        </label>
      ))}
    </div>
  );
};

export default Categories;
