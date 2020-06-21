export const getMinMax = (data) => {
  const prices = data.map((item) => item.price);

  return { max: Math.max(...prices), min: Math.min(...prices) };
};

export const getCategoriesCount = (list, data) =>
  list.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: data.filter((item) => item.category === cur).length,
    }),
    {},
  );
