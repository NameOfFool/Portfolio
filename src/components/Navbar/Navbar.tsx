import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { GoPerson, GoHome, GoChecklist, GoProject } from 'react-icons/go';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuToggle = () => setMenuOpen((p) => !p)
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__content}>
                <NavLink to="/" className={styles.title}>Portfolio</NavLink>
                <div className={`${styles.menu} ${menuOpen ? styles.menu__open : ''}`}>
                    <NavLink className={({ isActive }) => isActive ? styles.active + " " + styles.menu__item : styles.menu__item} to="/">
                        <GoHome className={styles.navIcon} /> Home
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active + " " + styles.menu__item : styles.menu__item} to="/about">
                        <GoPerson className={styles.navIcon} /> About
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active + " " + styles.menu__item : styles.menu__item} to="/projects">
                        <GoProject className={styles.navIcon} /> Projets
                    </NavLink>
                </div>
                <button className={styles.menu__toggler} onClick={menuToggle}>
                    {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                </button>
            </div>
        </nav>
    )
}