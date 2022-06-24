import React, { useContext } from 'react';
import styles from '../Subnavbar/Subnavbar.module.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';

export const Subnavbar = () => {
  const { mode } = useContext(GlobalContext);

  return (
    <div className={styles.subnavbar}>
      <div className={styles.buttons}>
        <Dropdown
          textButton={'DROPS'}
          options={['NBA', 'FOOTBALL', 'VOLEYBALL']}
        />
        <Dropdown
          textButton={'ARTISTAS'}
          options={['MARADONA', 'JORDAN', 'NADAL']}
        />
        <Link
          className={`${styles.promocion} ${
            mode.mode === 'light' ? styles.light : styles.dark
          }`}
          to='/promociones'
        >
          PROMOCIONES
        </Link>
      </div>
      <div className={styles.idioma}>
        <Dropdown textButton={'ES'} options={['EN']} />
      </div>
    </div>
  );
};
