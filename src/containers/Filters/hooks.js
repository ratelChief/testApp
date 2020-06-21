import { useState, useEffect } from 'react';
import { getFilteredData } from './utils';

export const useFilteredData = (data, filters, onFilterData) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getFilteredData(data, filters)
      .then((res) => {
        onFilterData(res);
      })
      .finally(() => setLoading(false));
  }, [filters]);

  return [loading];
};
