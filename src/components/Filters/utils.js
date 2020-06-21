export const categoriesToArray = (categories) =>
  Array.from(categories).reduce((acc, [key, value]) => {
    if (value) {
      acc.push(key);
    }

    return acc;
  }, []);

export const categoriesToMap = (initValues = []) => {
  const map = new Map();

  initValues.forEach((value) => {
    map.set(value, true);
  });

  return map;
};
