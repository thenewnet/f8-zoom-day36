import { Link } from 'react-router-dom';
import { Home, LayoutDashboard, Settings, Users } from "lucide-react";

import styles from './AdminSidebar.module.scss';

function AdminSidebar() {
    return (
        <>
            <div className={styles.container}>
                <ul className={styles.sidebarNav}>
                    <li>
                        <Link to="/admin" className={styles.btn}>
                            <LayoutDashboard size={18} /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/settings" className={`${styles.btn}`}>
                            <Settings size={18} /> Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users" className={`${styles.btn}`}>
                            <Users size={18} />Users
                        </Link>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default AdminSidebar;