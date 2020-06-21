import React from 'react';
import { useSelector } from 'react-redux';

import { getDataByName } from 'redux/selectors';

import { Filters } from 'components';

const FiltersContainer = () => {
  const data = useSelector((state) => getDataByName(state, 'data'));
  const cities = useSelector((state) => getDataByName(state, 'city'));
  const categories = useSelector((state) => getDataByName(state, 'category'));
  const categoriesList = useSelector((state) => state.reducer.category.list);

  return (
    <Filters data={data} cities={cities} categories={categories} categoriesList={categoriesList} />
  );
};

export default FiltersContainer;
