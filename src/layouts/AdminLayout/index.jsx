
import { Outlet } from 'react-router-dom';

import styles from './AdminLayout.module.scss';
import AdminSidebar from './components/AdminSidebar';
import AdminFooter from './components/AdminFooter';
import AdminHeader from './components/AdminHeader';

function AdminLayout() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <AdminHeader />
                </div>
                <div className={styles.main}>
                    <div className={styles.sidebar}>
                        <AdminSidebar />
                    </div>
                    <div className={styles.content}>
                        <Outlet />
                    </div>
                </div>

                <div className={styles.footer}>
                    <AdminFooter />
                </div>
            </div>
        </>
    )
}

export default AdminLayout;