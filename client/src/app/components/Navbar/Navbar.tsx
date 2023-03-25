"use client"

import Link from 'next/link';
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
        <li><Link href={"/home"}>Home</Link></li>
        <li><Link href={"/proveedores"}><p>Proveedores</p></Link></li>
        <li><Link href={"/compras"}><p>Compra</p></Link></li>
        <li><Link href={"/deposito"}><p>Deposito</p></Link></li>
        <li><Link href={"/transporte"}><p>Transporte</p></Link></li>
        <li><Link href={"/obras"}>Obras</Link></li>
        <li><Link href={"/Personal"}>Personal</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
