import React, { useContext } from 'react';
import styles from '../Logos/Logos.module.css';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import logo3 from '../../images/logo3.png';
import logo4 from '../../images/logo4.png';
import logo5 from '../../images/logo5.png';
import logonegro1 from '../../images/logonegro1.png';
import logonegro2 from '../../images/logonegro2.png';
import logonegro3 from '../../images/logonegro3.png';
import logonegro4 from '../../images/logonegro4.png';
import logonegro5 from '../../images/logonegro5.png';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

export const Logos = () => {
  const { mode } = useContext(GlobalContext);

  return (
    <div className={styles.all}>
      <div className={styles.textos}>
        <h3 className={styles.descubre}>DESCUBRE NUESTROS</h3>
        <h2 className={styles.partners}>PARTNERS</h2>
      </div>
      <div className={styles.imgs}>
        <img src={mode.mode === 'light' ? logo1 : logonegro1} alt='logo' />
        <img src={mode.mode === 'light' ? logo2 : logonegro2} alt='logo' />
        <img src={mode.mode === 'light' ? logo3 : logonegro3} alt='logo' />
        <img src={mode.mode === 'light' ? logo4 : logonegro4} alt='logo' />
        <img src={mode.mode === 'light' ? logo5 : logonegro5} alt='logo' />
      </div>
    </div>
  );
};
