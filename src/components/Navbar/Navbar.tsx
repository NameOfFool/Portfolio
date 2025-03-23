import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { GoPerson, GoHome, GoProject } from 'react-icons/go';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useState } from 'react';
import logo from '../../assets/logo.png'
import { GithubOriginalIcon } from '@devicon/react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuToggle = () => setMenuOpen((p) => !p)
    const { t } = useTranslation()
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__content}>
                <NavLink to="/" className={styles.title}><img src={logo} /></NavLink>
                <div className={styles.menu__container}>
                    <div className={`${styles.menu} ${menuOpen ? styles.menu__open : ''}`}>
                        <NavLink className={({ isActive }) => isActive ? styles.active + " " + styles.menu__item : styles.menu__item} to="/" onClick={() => setMenuOpen(false)}>
                            <GoHome className={styles.navIcon} /> {t("navbar.home")}
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.active + " " + styles.menu__item : styles.menu__item} to="/about" onClick={() => setMenuOpen(false)}>
                            <GoPerson className={styles.navIcon} /> {t("navbar.about")}
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.active + " " + styles.menu__item : styles.menu__item} to="/projects" onClick={() => setMenuOpen(false)}>
                            <GoProject className={styles.navIcon} /> {t("navbar.projects")}
                        </NavLink>
                        <a href='https://github.com/NameOfFool' target='_blank'><GithubOriginalIcon color='white' size={25} /></a>
                    </div>
                    <button className={styles.menu__toggler} onClick={menuToggle}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    )
}