import React, { memo } from 'react';

const ENTER_KEY = 'Enter';

const Categories = (props) => {
  const handleKeyPressed = (event) => {
    event.preventDefault();

    if (event.key === ENTER_KEY) {
      // props.onChange();
    }
  };

  return (
    <div>
      <span className="label">Categories</span>

      {props.checkboxes.map((checkbox) => {
        const { id, name } = checkbox;

        return (
          <label htmlFor={id} key={id} className="categories__label">
            <input
              type="checkbox"
              id={id}
              name={name}
              value={id}
              className="categories__input"
              onKeyPress={handleKeyPressed}
            />

            {name}
            <span className="categories__count">{`(${props.categoriesCounter[id]})`}</span>

            <span className="categories__checkbox" />
          </label>
        );
      })}
    </div>
  );
};

export default memo(Categories);
