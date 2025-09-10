import { Outlet } from 'react-router-dom';

import styles from './DefaultLayout.module.scss';
import Footer from './components/Footer';
import Header from '../components/Header';

function DefaultLayout() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className={styles.content}>
                    <Outlet />
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </>

    )
}

export default DefaultLayout;