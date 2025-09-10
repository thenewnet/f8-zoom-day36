
import styles from './logo.module.scss';

function Logo() {
    return (
        <>
            <div className={styles.logo}>
                <img src="./logo.png" alt="Logo" /> <span>Học Lập Trình Để Đi Làm</span>
            </div>
        </>
    )
}

export default Logo;