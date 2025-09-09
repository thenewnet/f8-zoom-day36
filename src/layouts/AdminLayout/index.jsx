
import { Outlet } from 'react-router-dom';

import styles from './AdminLayout.module.scss';
import AdminSidebar from './components/AdminSidebar';
import AdminFooter from './components/AdminFooter';
import AdminHeader from './components/AdminHeader';

function AdminLayout() {
    return (
        <>
            <AdminHeader />
            <AdminSidebar />
            <AdminFooter />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default AdminLayout;