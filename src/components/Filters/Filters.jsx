import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { getDataByName } from 'redux/selectors';

import { City, Categories, Price } from './components';

const Filters = () => {
  const cities = useSelector((state) => getDataByName(state, 'city'));
  const categories = useSelector((state) => getDataByName(state, 'category'));
  const { max, min } = useSelector((state) => {
    const data = getDataByName(state, 'data');
    const prices = data.map((item) => item.price);

    return { max: Math.max(...prices), min: Math.min(...prices) };
  }, shallowEqual);

  const [formState, setFormState] = useState({ city: cities[0].value });

  const handleCityChange = (event) => {
    setFormState({ ...formState, city: event.target.value });
  };

  const handleSubmit = (...args) => {
    debugger;
  };

  return (
    <aside>
      <form onSubmit={handleSubmit} className="filters">
        <City options={cities} value={formState.city} onChange={handleCityChange} />

        <Categories checkboxes={categories} />

        <div>
          <Price max={max} min={min} />

          <div>
            <div>
              {min}\{max}
            </div>
            <button type="submit">Filter</button>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default Filters;
