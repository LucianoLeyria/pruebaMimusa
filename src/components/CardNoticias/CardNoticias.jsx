import React from 'react';
import styles from '../CardNoticias/CardNoticias.module.css';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

export const CardNoticias = ({ img, titulo, fecha, descripcion }) => {
  return (
    <div className={styles.all}>
      <img className={styles.img} src={img} alt='imagenes' />
      <button className={styles.button}>
        <BsFillArrowUpRightSquareFill className={styles.icon} />
      </button>
      <h1 className={styles.titulo}>{titulo}</h1>
      <p className={styles.fecha}>{fecha}</p>
      <p className={styles.parrafo}>{descripcion}</p>
    </div>
  );
};
