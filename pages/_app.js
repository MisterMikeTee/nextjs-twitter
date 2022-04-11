import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import { useEffect } from "react";
import styles from '../styles/globalStyles.module.css'

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (
  <> 
    <Head>
      <div className={styles.navbarContainer}>
        <div className = 'col-4'>
          <button type="button" style={{backgroundColor: 'transparent', border: 'none', outline: 'none'}} className="btn btn-secondary">Menu</button>
        </div>
        <div className='col-4'>
          <h1 className={styles.navbarTitle}>Title</h1>
        </div>
        <div className='col-4'>

        </div>
      </div>
    </Head>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
