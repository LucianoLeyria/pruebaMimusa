import React, { useContext } from 'react';
import styles from '../Searchbar/Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

export const Searchbar = () => {
  const { mode } = useContext(GlobalContext);

  return (
    <div
      className={`${styles.inputybutton} ${
        mode.mode === 'light' ? styles.light : styles.dark
      }`}
    >
      <input
        type='text'
        className={styles.input}
        placeholder='BUSCA TU DROP AQUÍ'
      />
      <button
        className={`${styles.lupa} ${
          mode.mode === 'light' ? styles.light : styles.dark
        }`}
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
};
