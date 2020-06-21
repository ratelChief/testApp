import React, { useRef } from 'react';
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

  const sliderRef = useRef(max);

  const handleSubmit = (...args) => {
    debugger;
  };

  const handlePriceChange = (event) => {
    sliderRef.current = event.target.valueAsNumber;
  };

  return (
    <aside>
      <form onSubmit={handleSubmit} className="filters">
        <City options={cities} />

        <Categories checkboxes={categories} />

        <div>
          <Price ref={sliderRef} max={max} min={min} onChange={handlePriceChange} />

          <div>
            <div>
              {min}\{sliderRef.current}
            </div>
            <button type="submit">Filter</button>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default Filters;
