
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import styles from './AuthLayout.module.scss';
import AuthSidebar from './components/AuthSidebar';

function AuthLayout() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <AuthSidebar />
                </div>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default AuthLayout;