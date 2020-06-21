import React, { memo } from 'react';

import { Range } from 'rc-slider';
import colors from '../../../styles/_colors.scss';
import 'rc-slider/assets/index.css';

const trackStyle = [{ backgroundColor: colors.dodgerBlue }];
const railStyle = { height: 4, borderRadius: 0 };
const handleStyle = [
  { border: `2px solid ${colors.dodgerBlue}` },
  { border: `2px solid ${colors.dodgerBlue}` },
];

const Price = (props) => {
  return (
    <div>
      <span className="label">Price</span>

      <Range
        min={props.min}
        max={props.max}
        allowCross={false}
        value={props.value}
        onChange={props.onChange}
        trackStyle={trackStyle}
        railStyle={railStyle}
        handleStyle={handleStyle}
      />
    </div>
  );
};

export default memo(Price);
