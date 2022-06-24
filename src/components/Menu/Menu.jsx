import React from 'react';
import { Navbar } from './Navbar/Navbar';
import styles from '../Menu/Menu.module.css';
import { Subnavbar } from './Subnavbar/Subnavbar';

export const Menu = () => {
  return (
    <div className={styles.fondo}>
      <Navbar />
      <Subnavbar />
    </div>
  );
};
