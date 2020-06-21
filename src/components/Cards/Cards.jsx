import React from 'react';

import { Card } from 'components';

const Cards = (props) => (
  <section className="cards">
    {props.data.map((item) => (
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

export default Cards;
