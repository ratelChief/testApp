import React, { memo } from 'react';

const ENTER_KEY = 'Enter';

const Categories = (props) => {
  const handleKeyPressed = (event) => {
    event.preventDefault();

    if (event.key === ENTER_KEY) {
      const fakeEvent = { target: { checked: !event.target.checked, id: event.target.id } };

      props.onChange(fakeEvent);
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
              className={`categories__input ${
                props.checkedCategories.get(id) ? 'categories__input--checked' : ''
              }`}
              onKeyPress={handleKeyPressed}
              onChange={props.onChange}
              value={id}
              checked={props.checkedCategories.get(id)}
            />

            {name}

            <span className="categories__count">{`(${props.counter[id]})`}</span>

            <span className="categories__checkbox" />
          </label>
        );
      })}
    </div>
  );
};

export default memo(Categories);
