import React, { useContext } from 'react';
import { Menu } from '../Menu';
import styles from '../Header/Header.module.css';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';
import { BannerGrande } from '../../BannerGrande/BannerGrande';
import jugador from '../../../images/jugador.png';
import fondojugador from '../../../images/fondojugador.png';

export const Header = () => {
  const { mode } = useContext(GlobalContext);

  return (
    <div
      className={`${styles.fondo} ${
        mode.mode === 'light' ? styles.light : styles.dark
      }`}
    >
      <Menu />
      <BannerGrande
        jugador={jugador}
        fondojugador={fondojugador}
        h1='DESCUBRE, COLECCIONA Y COMPRA INCREÍBLES 
      '
        h1resaltado='NFTs'
        presaltado='Explora el mercado para empezar'
        p='StadioPlus es el primer mercado NFT de la comunidad del deporte. Descubre la oportunidad de poseer, vender y comercializar NFT . Explora el mercado para empezar.
  '
        imgjugador={jugador}
        imgfondojugador={fondojugador}
        buttontext1='CREA TU NFT'
        buttontext2='EXPLORAR'
      />
    </div>
  );
};
