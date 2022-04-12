import SideMenu from '../components/SideMenu'
import styles from '../styles/globalStyles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import React ,{ useState, useEffect } from 'react'


function Layout ({children}) {
    
    const [isOpen, setIsOpen] = useState(false);

    function sideMenuHandler(){
        if(!isOpen) {
            setIsOpen(true);
            return isOpen
        } else {
            setIsOpen(false);
            return isOpen
        }
        console.log('state', isOpen);

    }

    return (
    <>
        <Head>
        <title>Copwitter</title>
        </Head>
        <div className={styles.navbarContainer}>
          <div className = 'col-4'>
            <button type="button" onClick={sideMenuHandler} className={styles.navbarButton}>Menu</button>
          </div>
          <div className='col-4'>
            <h1 className={styles.navbarTitle}>Title</h1>
          </div>
          <div className='col-4'>
          </div>
        </div>
        {isOpen && <SideMenu></SideMenu>}
        {children}
    </>
    
    );
}

export default Layout