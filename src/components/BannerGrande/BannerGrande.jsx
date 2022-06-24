import React from 'react';
import styles from '../BannerGrande/BannerGrande.module.css';

export const BannerGrande = ({
  h1,
  h1resaltado,
  presaltado,
  p,
  imgjugador,
  imgfondojugador,
  buttontext1,
  buttontext2,
  dadovuelta,
  parrafito,
}) => {
  return (
    <div className={`${styles.all} ${dadovuelta ? styles.invertido : null}`}>
      <div className={styles.titulo}>
        <div className={styles.h1s}>
          <p className={styles.parrafito}>{parrafito}</p>
          <h1 className={styles.segundotitulo}>
            {h1} <span className={styles.rojito}>{h1resaltado}</span>
          </h1>
        </div>
        <div className={styles.ps}>
          <p className={styles.pnormal}>{p}</p>
          <p className={styles.pconbold}>{presaltado}</p>
        </div>
        <div className={styles.buttons}>
          {buttontext1 && buttontext2 ? (
            <>
              <button className={styles.nft}>{buttontext1}</button>
              <button className={styles.explorar}>{buttontext2}</button>{' '}
            </>
          ) : null}
        </div>
      </div>
      <div className={styles.jugador}>
        <img
          className={styles.fondojugador}
          src={imgfondojugador}
          alt='fondojugador'
        />
        <img className={styles.jugadorsolo} src={imgjugador} alt='jugador' />
      </div>
    </div>
  );
};
