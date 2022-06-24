import React from 'react';
import styles from '../Footer/Footer.module.css';
import logoW from '../../images/logoW.png';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className={styles.all}>
      <div className={styles.all2}>
        <img className={styles.img} src={logoW} alt='logoW' />
        <h2 className={styles.titulo}>
          YA ESTÁ AQUI EL NUEVO TOKEN DE STADIOPLUS
        </h2>
        <div className={styles.iconos}>
          <a
            className={styles.ancord}
            target='_blank'
            href='http://www.facebook.com'
          >
            <FaFacebookF />
          </a>
          <a
            className={styles.ancord}
            target='_blank'
            href='http://www.twitter.com'
          >
            <AiOutlineTwitter />
          </a>
          <a
            className={styles.ancord}
            target='_blank'
            href='http://www.instagram.com'
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};
