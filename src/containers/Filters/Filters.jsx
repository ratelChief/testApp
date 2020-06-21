import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataByName } from 'redux/selectors';
import { setFilter, setFilteredData } from 'redux/actions';
import { Filters } from 'components';
import { useFilteredData } from './hooks';
import { getCategoriesCount, getMinMax } from './utils';

const FiltersContainer = (props) => {
  const { data } = props;

  const dispatch = useDispatch();

  const cities = useSelector((state) => getDataByName(state, 'city'));
  const categories = useSelector((state) => getDataByName(state, 'category'));
  const categoriesList = useSelector((state) => state.reducer.category.list);

  const handleSubmit = (values) => {
    dispatch(setFilter(values));
  };

  const filterData = useCallback((values) => dispatch(setFilteredData(values)), [dispatch]);

  const [loading] = useFilteredData(props.data, props.filters, filterData);

  const categoriesCounter = useMemo(() => getCategoriesCount(categoriesList, data), [
    categoriesList,
    data,
  ]);

  const { max, min } = useMemo(() => getMinMax(data), [data]);

  return (
    <>
      {!loading && (
        <Filters
          cities={cities}
          categories={categories}
          onSubmit={handleSubmit}
          filters={props.filters}
          counter={categoriesCounter}
          max={max}
          min={min}
        />
      )}
    </>
  );
};

export default FiltersContainer;
