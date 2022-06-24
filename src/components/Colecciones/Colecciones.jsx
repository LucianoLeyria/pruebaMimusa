import React from 'react';
import styles from '../Colecciones/Colecciones.module.css';
import linea from '../../images/linea.png';

export const Colecciones = () => {
  return (
    <div className={styles.obrasylinea}>
      <h3 className={styles.obras}>COLECCIONES</h3>
      <img className={styles.linea} src={linea} alt='linea divisoria' />
    </div>
  );
};
