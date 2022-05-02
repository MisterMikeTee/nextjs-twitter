import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import React from 'react'


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