import React, { memo } from 'react';

const PriceRange = (props) => (
  <div className="filters__price-range">
    <span>
      ${props.min} <span className="price-divider">-</span> ${props.max}
    </span>
  </div>
);

export default memo(PriceRange);
