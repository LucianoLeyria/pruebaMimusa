import React, { useContext, useState } from 'react';
import styles from '../Dropdown/Dropdown.module.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { GlobalContext } from '../../../GlobalContext/GlobalContext';

export const Dropdown = ({ textButton, options }) => {
  const { mode } = useContext(GlobalContext);

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.all}>
      <button
        className={`${styles.button} ${
          mode.mode === 'light' ? styles.light : styles.dark
        }`}
        onClick={handleClick}
      >
        {textButton} <AiOutlineArrowDown />
      </button>

      {showMenu && (
        <div className={styles.toggle}>
          {options.map((o) => {
            return <p>{o}</p>;
          })}
        </div>
      )}
    </div>
  );
};
