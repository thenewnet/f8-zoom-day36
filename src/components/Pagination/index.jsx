
import styles from './Pagination.module.scss';

function Pagination({ totalPages, currentPage, onPageChange, onChangeItemsPerPage }) {
    return (
        <>
            <div className={styles.container}>
                <span>Items per page:</span>
                <select className={styles.items_per_page}
                    onChange={(e) => onChangeItemsPerPage(parseInt(e.target.value, 10))}                                    >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>

                <button onClick={() => onPageChange(1)}
                    className={currentPage === 1 ? styles.disabled : ''}
                >
                    First
                </button>
                <button onClick={() => onPageChange(currentPage - 1)}
                    className={currentPage === 1 ? styles.disabled : ''}
                >
                    Previous
                </button>
                {
                    Array(totalPages)
                        .fill()
                        .map((_, index) => {
                            const pageNum = index + 1;

                            return (
                                <>
                                    <button key={index} className={pageNum === currentPage ? styles.active : ''}
                                        onClick={() => onPageChange(pageNum)}>
                                        {pageNum}
                                    </button>
                                </>
                            )
                        })
                }
                <button onClick={() => onPageChange(currentPage + 1)}
                    className={currentPage === totalPages ? styles.disabled : ''}
                >
                    Next
                </button>
                <button onClick={() => onPageChange(totalPages)}
                    className={currentPage === totalPages ? styles.disabled : ''}
                >
                    Last
                </button>
            </div>
        </>
    )
}

export default Pagination;