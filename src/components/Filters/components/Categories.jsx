import React from 'react';

const Categories = (props) => {
  return (
    <div>
      <span className="label">Categories</span>

      {props.checkboxes.map((checkbox) => (
        <label htmlFor={checkbox.id} key={checkbox.id}>
          <input type="checkbox" id={checkbox.id} name={checkbox.name} value={checkbox.id} />

          {checkbox.name}
        </label>
      ))}
    </div>
  );
};

export default Categories;