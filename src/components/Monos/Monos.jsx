import React from 'react';
import styles from '../Monos/Monos.module.css';
import mono1 from '../../images/mono1.png';
import mono2 from '../../images/mono2.png';
import mono3 from '../../images/mono3.png';
import mono4 from '../../images/mono4.png';

export const Monos = () => {
  return (
    <div className={styles.all}>
      <div className={styles.monos}>
        <img src={mono1} alt='mono1' />
        <img src={mono2} alt='mono2' />
        <img src={mono3} alt='mono3' />
        <img src={mono4} alt='mono4' />
      </div>
      <h3 className={styles.texto1}>PARTICIPA EN NUESTRO</h3>
      <h1 className={styles.texto2}>DRAFT DE ARTISTAS</h1>
      <button className={styles.button}>INSCRÍBETE</button>
    </div>
  );
};
