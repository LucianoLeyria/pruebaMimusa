import React from 'react';
import bannerchica from '../../images/bannerchica.png';
import styles from '../BannerChica/BannerChica.module.css';

export const BannerChica = () => {
  return (
    <div className={styles.all}>
      <img className={styles.bannerchica} src={bannerchica} alt='bannerchica' />
    </div>
  );
};
