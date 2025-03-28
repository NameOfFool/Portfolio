import { Outlet, } from 'react-router-dom'
import styles from './App.module.scss'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import "./i18n/i18n"


function Layout() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
