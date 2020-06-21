import React from 'react';
import { useSelector } from 'react-redux';

import { Card } from 'components';
import { getDataByName } from 'redux/selectors';

const Cards = () => {
  const data = useSelector((state) => getDataByName(state, 'data'));

  return (
    <section className="cards">
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          city={item.city}
          category={item.category}
          price={item.price}
        />
      ))}
    </section>
  );
};

export default Cards;
