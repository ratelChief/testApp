import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import getEntityName from 'redux/selectors/getEntityName';
import image1 from '../../images/image1.jpg';

const Card = (props) => {
  const { name, city, category, price } = props;

  const cityName = useSelector((state) => getEntityName(state, 'city', city));
  const categoryName = useSelector((state) => getEntityName(state, 'category', category));

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card__photo">
        <img src={image1} alt={`${name}`} className="card__image" />
        <span className="card__image-text">{cityName}</span>
        <div className={`card__overlay ${hovered ? 'card__overlay--hovered' : ''}`} />
      </div>

      <div className="card__description">
        <p className="card__text card__text--bold">
          Affiliate Marketing - A Beginner&apos;s Guide to Earning Online
        </p>

        <div className="card__footer">
          <span className="card__category">{categoryName}</span>
          <span className="card__price">${price}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
