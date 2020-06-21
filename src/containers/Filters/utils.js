import isEmpty from 'lodash.isempty';

const getFilteredByCity = async (data, filter) => {
  if (!filter) {
    return data;
  }

  return data.filter((item) => item.city === filter);
};

const getFilteredByPrice = async (data, filter) => {
  if (!filter) {
    return data;
  }
  const [min, max] = filter;

  return data.filter((item) => item.price >= min && item.price <= max);
};

const getFilteredByCategories = async (data, filter) => {
  if (!filter.length) {
    return data;
  }

  return data.filter((item) => filter.includes(item.category));
};

export const getFilteredData = (data, filters) => {
  return new Promise((resolve) => {
    if (isEmpty(filters)) {
      return resolve(data);
    }

    return getFilteredByCity(data, filters.city)
      .then((res) => getFilteredByPrice(res, filters.price))
      .then((res) => getFilteredByCategories(res, filters.categories))
      .then((res) => resolve(res));
  });
};

export const getCategoriesCount = (list, data) =>
  list.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: data.filter((item) => item.category === cur).length,
    }),
    {},
  );

export const getMinMax = (data = []) => {
  const prices = data.map((item) => item.price);

  return { max: Math.max(...prices), min: Math.min(...prices) };
};
