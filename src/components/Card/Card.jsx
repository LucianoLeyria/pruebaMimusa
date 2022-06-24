import React from 'react';
import styles from '../Card/Card.module.css';

export const Card = ({
  id,
  img,
  titulo,
  precio,
  preciodolar,
  button = 'COMPRAR',
  backgroundColor = '#D6302A',
}) => {
  return (
    <div id={id} className={styles.all}>
      <div className={styles.todomenosimg}>
        <img className={styles.img} src={img} alt='bombonera' />
        <h1 className={styles.titulo}>{titulo}</h1>
        <p className={styles.precio}>{precio}</p>
        <p className={styles.preciodolar}>{preciodolar}</p>
      </div>
      <div className={styles.divbutton}>
        <button style={{ backgroundColor }} className={styles.buttoncomprar}>
          {button}
        </button>
      </div>
    </div>
  );
};
