import { Home, Info, Phone, FileText, Shield, Settings, Users } from "lucide-react";
import clsx from "clsx";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const navItems = [
    { to: '/', title: 'Home', icon: <Home size={18} /> },
    { to: '/about', title: 'About', icon: <Info size={18} /> },
    { to: '/contact', title: 'Contact', icon: <Phone size={18} /> },
    { to: '/posts', title: 'Posts', icon: <FileText size={18} /> },
    { to: '/privacy', title: 'Privacy', icon: <Shield size={18} /> },
    { to: '/admin/settings', title: 'Settings', icon: <Settings size={18} /> },
    { to: '/admin/users', title: 'Users', icon: <Users size={18} /> },
];
function Header() {
    return (
        <header className={styles.siteHeader}>
            <div className={clsx(styles.container, styles.wrapper)}>
                {/* Logo */}
                <div className={styles.logo}>
                    <img src="./logo.svg" alt="Logo" />
                </div>

                {/* Navigation */}
                <nav className={styles.nav}>
                    <ul>
                        {navItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.to}
                                        className={({ isActive }) => clsx(styles.navItem, isActive && styles.active)}>
                                        {item.icon} {item.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Actions */}
                <div className={styles.actions}>
                    <NavLink to="/login" className={styles.btn}>
                        Đăng nhập
                    </NavLink>
                    <NavLink to="/register" className={clsx(styles.btn, styles.btnPrimary)}>
                        Đăng ký
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
