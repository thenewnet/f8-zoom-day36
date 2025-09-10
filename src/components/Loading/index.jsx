import styles from './loading.module.scss';

function Loading(){
    return (
        <div className={styles.overlay}>
            <div className={styles.spinner}></div>
        </div>
    );
}

export default Loading;