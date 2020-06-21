import React, { useState, useMemo, useEffect, useRef } from 'react';

import { getMinMax, getCategoriesCount } from './utils';

import { City, Categories, Price } from './components';

const Filters = (props) => {
  const { data, cities, categories, categoriesList } = props;

  const rerender = useRef(1);
  const recount = useRef(0);

  useEffect(() => {
    rerender.current += 1;

    console.log('rerender.current', rerender.current);
  });

  const { max, min } = useMemo(() => {
    recount.current += 1;
    console.log('recount', recount.current);
    return getMinMax(data);
  }, [data]);

  const categoriesCounter = useMemo(() => {
    return getCategoriesCount(categoriesList, data);
  }, [categoriesList, data]);

  const [formState, setFormState] = useState({ city: cities[0].value, price: [min, max] });
  const { city, price } = formState;

  const handleCityChange = (event) => {
    setFormState({ ...formState, city: event.target.value });
  };

  const handlePriceChange = (values) => {
    setFormState({ ...formState, price: values });
  };

  const handleSubmit = (...args) => {
    debugger;
  };

  return (
    <aside>
      <form onSubmit={handleSubmit} className="filters">
        <City options={cities} value={city} onChange={handleCityChange} />

        <Categories checkboxes={categories} categoriesCounter={categoriesCounter} />

        <div>
          <Price max={max} min={min} value={price} onChange={handlePriceChange} />

          <div className="filters__footer">
            <div className="filters__price-range">
              <span>
                ${price[0]} <span className="price-divider">-</span> ${price[1]}
              </span>
            </div>

            <button type="submit" className="button button--primary">
              Filter
            </button>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default Filters;
