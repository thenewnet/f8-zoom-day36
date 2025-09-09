
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import styles from './AuthLayout.module.scss';
import AuthSidebar from './components/AuthSidebar';

function AuthLayout() {
    return (
        <>
            <Header />
            <AuthSidebar />
            <div className={styles.container}>
                <Outlet />
            </div>

        </>
    )
}

export default AuthLayout;