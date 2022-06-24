import React, { useContext } from 'react';
import { Searchbar } from '../../Searchbar/Searchbar';
import styles from '../Navbar/Navbar.module.css';
import { Link } from 'react-router-dom';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { Logo } from '../../Logo/Logo';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';

export const Navbar = () => {
  const { toggleColor } = useContext(GlobalContext);

  const handleClick = () => {
    toggleColor();
  };

  return (
    <>
      <div className={styles.fondo}>
        <Logo />
        <Searchbar />
        <div className={styles.links}>
          <Link to='/colecciones'>MIS COLECCIONES</Link>
          <Link to='/login'>LOGIN</Link>
          <Link className={styles.registro} to='/registro'>
            REGISTRARSE
          </Link>
        </div>
        <div className={styles.moonsun}>
          <label className={styles.switch}>
            <input onClick={handleClick} type='checkbox' />
            <span className={`${styles.slider} ${styles.round}`}>
              <BsFillMoonFill />
              <BsFillSunFill />
            </span>
          </label>
        </div>
      </div>
    </>
  );
};
