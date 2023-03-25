"use client"

import { useState } from 'react';
import styles from './Navbar.module.css';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.navbar}>
      <span
        className={`${styles['navbar__menu-icon']} ${showMenu && styles.active}`}
        onClick={handleMenuClick}
      >
        &#9776;
      </span>
      <ul className={`${styles.navbar__list} ${showMenu && styles.show}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Obras</a></li>
        <li><a href="#">Compras</a></li>
        <li><a href="#">Pedidos</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
