"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="/images/logo.png"  // <-- put your logo image inside public/images/
          alt="Website Logo"
          className={styles.logoImage}
        />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><a href="#defence" onClick={closeMenu}>Defence Policy</a></li>
        <li><a href="#future" onClick={closeMenu}>Future Of</a></li>
        <li><a href="#tech" onClick={closeMenu}>Defence Tech</a></li>
        <li><a href="#business" onClick={closeMenu}>Business & Economy</a></li>
      </ul>
    </nav>
  );
}
