import React, { useContext } from 'react';
import styles from '../Lanzamientos/Lanzamientos.module.css';
import linea from '../../images/linea.png';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { Carrousel } from '../Carrousel/Carrousel';
import { Colecciones } from '../Colecciones/Colecciones';
import bombonera from '../../images/bombonera.png';
import sky from '../../images/sky.png';
import eldiego from '../../images/eldiego.png';

export const Lanzamientos = () => {
  const { mode } = useContext(GlobalContext);

  let cards = [
    {
      id: 10,
      img: bombonera,
      titulo: 'LA BOMBONERA - "TEMPLE OF WORLD FOOTBALL"',
      precio: '0.034 BNB',
      preciodolar: '($10.88 / 10.14€)',
    },
    {
      id: 11,
      img: sky,
      titulo: 'TOMBA LA TOMBA',
      precio: '0.034 BNB',
      preciodolar: '($10.88 / 10.14€)',
    },
    {
      id: 12,
      img: eldiego,
      titulo: 'EL SEMILLERO DEL MUNDO',
      precio: '5 BNB',
      preciodolar: '($1600 / 1490.50€)',
    },
    {
      id: 13,
      img: eldiego,
      titulo: 'EL SEMILLERO DEL MUNDO',
      precio: '5 BNB',
      preciodolar: '($1600 / 1490.50€)',
    },
    {
      id: 14,
      img: eldiego,
      titulo: 'EL SEMILLERO DEL MUNDO',
      precio: '5 BNB',
      preciodolar: '($1600 / 1490.50€)',
    },
    {
      id: 15,
      img: eldiego,
      titulo: 'EL SEMILLERO DEL MUNDO',
      precio: '5 BNB',
      preciodolar: '($1600 / 1490.50€)',
    },
  ];

  let arr = [
    {
      id: 1,
      img: bombonera,
      titulo: 'LA BOMBONERA - "TEMPLE OF WORLD FOOTBALL"',
      precio: '0.034 BNB',
      preciodolar: '($10.88 / 10.14€)',
    },
    {
      id: 2,
      img: sky,
      titulo: 'TOMBA LA TOMBA',
      precio: '0.034 BNB',
      preciodolar: '($10.88 / 10.14€)',
    },
    {
      id: 3,
      img: eldiego,
      titulo: 'EL SEMILLERO DEL MUNDO',
      precio: '5 BNB',
      preciodolar: '($1600 / 1490.50€)',
    },
    {
      id: 4,
      img: eldiego,
      titulo: 'EL SEMILLERO DEL MUNDO',
      precio: '5 BNB',
      preciodolar: '($1600 / 1490.50€)',
    },
    {
      id: 5,
      img: eldiego,
      titulo: 'EL SEMILLERO DEL MUNDO',
      precio: '5 BNB',
      preciodolar: '($1600 / 1490.50€)',
    },
    {
      id: 6,
      img: eldiego,
      titulo: 'EL SEMILLERO DEL MUNDO',
      precio: '5 BNB',
      preciodolar: '($1600 / 1490.50€)',
    },
  ];

  return (
    <div
      className={`${styles.all} ${
        mode.mode === 'light' ? styles.light : styles.dark
      }`}
    >
      <h3 className={styles.descubre}>DESCUBRE NUESTROS</h3>
      <h1 className={styles.nuevos}>NUEVOS LANZAMIENTOS</h1>
      <div className={styles.obrasylinea}>
        <h3 className={styles.obras}>OBRAS DESTACADAS</h3>
        <img className={styles.linea} src={linea} alt='linea divisoria' />
      </div>
      <Carrousel cards={arr} button={'COMPRAR'} backgroundColor={'#D6302A'} />
      <Colecciones />
      <Carrousel
        cards={cards}
        button={'EXPLORAR'}
        backgroundColor={'#0039FF'}
      />
    </div>
  );
};
