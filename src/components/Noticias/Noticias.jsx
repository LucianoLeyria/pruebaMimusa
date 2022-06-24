import React from 'react';
import styles from '../Noticias/Noticias.module.css';
import bruno from '../../images/bruno.png';
import fifa from '../../images/fifa.png';
import rugby from '../../images/rugby.png';
import { CardNoticias } from '../CardNoticias/CardNoticias';

export const Noticias = () => {
  let arr = [
    {
      img: rugby,
      titulo: 'LOREM IPSUM DOLOR SIT',
      fecha: '12.02.2022',
      descripcion: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: fifa,
      titulo: 'LOREM IPSUM DOLOR SIT',
      fecha: '12.02.2022',
      descripcion: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: bruno,
      titulo: 'LOREM IPSUM DOLOR SIT',
      fecha: '12.02.2022',
      descripcion: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className={styles.all}>
      <div className={styles.textos}>
        <p className={styles.noticias}> ACTUALIDAD Y NOTICIAS</p>
        <h1 className={styles.blog}>BLOG</h1>
      </div>
      <div className={styles.imagenes}>
        {arr.map((i, index) => {
          return (
            <CardNoticias
              key={index}
              img={i.img}
              titulo={i.titulo}
              fecha={i.fecha}
              descripcion={i.descripcion}
            />
          );
        })}
      </div>
      <button className={styles.leermas}>LEER MÁS</button>
    </div>
  );
};
