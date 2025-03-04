import { Outlet, } from 'react-router-dom'
import styles from './App.module.scss'
import Navbar from './components/Navbar/Navbar'


function Layout() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
