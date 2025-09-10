import { Home, LayoutDashboard, Settings, Users } from "lucide-react";
import clsx from "clsx";
import styles from "./AdminHeader.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../../components/Logo";

const navItems = [
    { to: '/', title: 'Home', icon: <Home size={18} /> },
    { to: '/admin', title: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { to: '/admin/settings', title: 'Settings', icon: <Settings size={18} /> },
    { to: '/admin/users', title: 'Users', icon: <Users size={18} /> },
];
function AdminHeader() {
    return (
        <header className={styles.siteHeader}>
            <div className={clsx(styles.container, styles.wrapper)}>
                {/* Logo */}
                <Logo />

                {/* Navigation */}
                <nav className={styles.nav}>
                    <ul>
                        {navItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink 
                                        to={item.to}
                                        end={item.to === "/admin"} //tránh active cả dashboard và users hoặc settings cùng lúc
                                        className={({ isActive }) => clsx(styles.navItem, isActive && styles.active)}>
                                        {item.icon} {item.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AdminHeader;
