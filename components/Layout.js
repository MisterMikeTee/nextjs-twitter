import NavBar from '../components/NavBar'
import styles from '../styles/globalStyles.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import React ,{ useState, useEffect } from 'react'


const Layout  = ({children}) => {
    
    return (
    <>
        <Head>
        <title>Copwitter</title>
        </Head>
        <NavBar></NavBar>
        {children}
    </>
    
    );
}

export default Layout