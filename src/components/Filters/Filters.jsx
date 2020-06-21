import React, { useState } from 'react';

import { categoriesToArray, categoriesToMap } from './utils';

import { City, Categories, Price, PriceRange } from './components';

const Filters = (props) => {
  const { min, max, cities, filters, counter } = props;

  const [formState, setFormState] = useState({
    city: filters.city ?? cities[0].id,
    price: filters.price || [min, max],
    checkedCategories: categoriesToMap(filters.categories),
  });
  const { city, price, checkedCategories } = formState;

  const handleCityChange = (event) => {
    setFormState({ ...formState, city: event.target.value });
  };

  const handlePriceChange = (values) => {
    setFormState({ ...formState, price: values });
  };

  const handleCategoriesChange = (event) => {
    const { checked, id } = event.target;

    setFormState({ ...formState, checkedCategories: checkedCategories.set(Number(id), checked) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const categories = categoriesToArray(formState.checkedCategories);

    props.onSubmit({ city: Number(city), price, categories });
  };

  return (
    <aside>
      <form onSubmit={handleSubmit} className="filters">
        <City options={cities} value={city} onChange={handleCityChange} />

        <Categories
          checkboxes={props.categories}
          checkedCategories={checkedCategories}
          counter={counter}
          onChange={handleCategoriesChange}
        />

        <div>
          <Price max={max} min={min} value={price} onChange={handlePriceChange} />

          <div className="filters__footer">
            <PriceRange min={price[0]} max={price[1]} />

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
