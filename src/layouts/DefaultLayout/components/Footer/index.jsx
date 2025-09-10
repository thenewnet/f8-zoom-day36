
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
                    Nội dung Footer
                </div>
            </footer>
        </>
    )
}

export default Footer;