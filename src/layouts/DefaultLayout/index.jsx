import { Outlet } from 'react-router-dom';

import styles from './DefaultLayout.module.scss';
import Footer from './components/Footer';
import Header from '../components/Header';

function DefaultLayout() {
    return (
        <>
            <Header />
            <h1>DefaultLayout</h1>
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </>

    )
}

export default DefaultLayout;