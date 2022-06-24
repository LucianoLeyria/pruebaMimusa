import React from 'react';
import { Card } from '../Card/Card';
import styles from '../Carrousel/Carrousel.module.css';
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io';

export const Carrousel = ({ cards, button, backgroundColor }) => {
  const handleClick = () => {
    const card = document.getElementById(cards[cards.length - 1].id);
    card.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickLeft = () => {
    const card = document.getElementById(cards[0].id);
    card.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <div className={styles.all}>
      <button onClick={handleClickLeft} className={styles.buttonleft}>
        <IoMdArrowDropleftCircle />
      </button>
      <div className={styles.cards}>
        {cards.map((c) => {
          return (
            <Card
              id={c.id}
              button={button}
              backgroundColor={backgroundColor}
              key={c.titulo}
              img={c.img}
              titulo={c.titulo}
              precio={c.precio}
              preciodolar={c.preciodolar}
            />
          );
        })}
      </div>

      <button onClick={handleClick} className={styles.buttonright}>
        <IoMdArrowDroprightCircle />
      </button>
    </div>
  );
};
