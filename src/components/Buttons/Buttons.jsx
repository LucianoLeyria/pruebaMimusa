import React, { useContext } from 'react';
import styles from '../Buttons/Buttons.module.css';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

export const Buttons = () => {
  const { mode } = useContext(GlobalContext);

  return (
    <div
      className={`${styles.buttons} ${
        mode.mode === 'light' ? styles.light : styles.dark
      }`}
    >
      <button className={styles.token}>TOKEN</button>
      <button className={styles.blog}>IR AL BLOG</button>
    </div>
  );
};
