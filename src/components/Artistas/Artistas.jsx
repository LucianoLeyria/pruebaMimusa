import React from 'react';
import styles from '../Artistas/Artistas.module.css';
import { Monos } from '../Monos/Monos';

export const Artistas = () => {
  return (
    <div className={styles.all}>
      <ul className={styles.lista}>
        <li>ARTISTAS</li>
        <li>ARTISTAS</li>
        <li>ARTISTAS</li>
        <li>ARTISTAS</li>
        <li>ARTISTAS</li>
        <li>ARTISTAS</li>
        <li>ARTISTAS</li>
        <li>ARTISTAS</li>
      </ul>
      <Monos />
    </div>
  );
};
