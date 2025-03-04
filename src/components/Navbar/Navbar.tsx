import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'   
import { GoPerson, GoHome } from 'react-icons/go';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.title}>Portfolio</NavLink>            
                <ul className={styles.menu}>
                    <li><NavLink className={({isActive}) =>  isActive ? styles.active:""} to="/"><GoHome className={styles.navIcon}/> Home</NavLink></li>
                    <li><NavLink className={({isActive}) =>  isActive ? styles.active:""} to="/about"><GoPerson className={styles.navIcon}/> About</NavLink></li>
                    <li><NavLink className={({isActive}) =>  isActive ? styles.active:""} to="/projects">Projets</NavLink></li>
                    <li><NavLink className={({isActive}) =>  isActive ? styles.active:""} to="/contacts">Contacts</NavLink></li>
                </ul>
        </nav>
    )
}