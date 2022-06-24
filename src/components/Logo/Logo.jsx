import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import logo from '../../images/logo.png';
import logoW from '../../images/logoW.png';
import styles from '../Logo/Logo.module.css';

export const Logo = () => {
  const { mode } = useContext(GlobalContext);

  return (
    <div>
      {mode.mode === 'light' ? (
        <img src={logo} alt='logo' />
      ) : (
        <img src={logoW} alt='logoW' />
      )}
    </div>
  );
};
