import React from 'react';
import styles from '../BannerFooter/BannerFooter.module.css';
import bannerfooter from '../../images/bannerfooter.png';

export const BannerFooter = () => {
  return (
    <div className={styles.all}>
      <img className={styles.img} src={bannerfooter} alt='imagenfutbol' />
      <input className={styles.inputtext} type='text' />
      <button className={styles.button}>ENVIAR</button>
      <input className={styles.inputcheck} type='checkbox' />
    </div>
  );
};
