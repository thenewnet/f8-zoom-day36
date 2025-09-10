
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.content}>
                    <Link to='/contact' className={styles.link}>
                        Contact
                    </Link>
                    <Link to='/privacy' className={styles.link}>
                        Privacy
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Footer;