
import { Link } from 'react-router-dom';
import styles from './AuthSidebar.module.scss';

function AuthSidebar() {
    return (
        <>
            <div className={styles.container}>
                <ul className={styles.sidebarNav}>
                    <li>
                        <Link to="/login" className={styles.btn}>Đăng nhập</Link>
                    </li>
                    <li>
                        <Link to="/register" className={`${styles.btn} ${styles.btnPrimary}`}>
                            Đăng ký
                        </Link>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default AuthSidebar;