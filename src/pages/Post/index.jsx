import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router";

import styles from './Post.module.scss';
import Pagination from '../../components/Pagination';

function Post() {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(() => {
        return parseInt(searchParams.get('page'), 10) || 1;
    });
    const [totalPage, setTotalPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=${itemsPerPage}&_page=${page}`
        )
            .then((res) => {
                const totalCount = parseInt(res.headers.get("X-Total-Count"), 10);
                setTotalPage(Math.ceil(totalCount / itemsPerPage));

                return res.json();
            })
            .then((posts) => {
                setPosts(posts);
            });
    }, [page, itemsPerPage]);

    useEffect(() => {
        setSearchParams({ page });
    }, [page, setSearchParams]);

    const handleChangePage = (page) => {
        setPage(page);
    }

    const handleChangeItemsPerPage =(itemsPerPage) => {
        setItemsPerPage(itemsPerPage);
        setPage(1);
    }
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.page_title}>Posts</h1>
                {
                    posts.map((post) => {
                        return (
                            <div className={styles.item} key={post.id}>
                                <p>{post.title}</p>
                            </div>
                        )
                    })
                }

                <div className={styles.pagination}>
                    <Pagination
                        totalPages={totalPage}
                        currentPage={page}
                        onPageChange={handleChangePage}
                        onChangeItemsPerPage={handleChangeItemsPerPage}
                    />
                </div>
            </div>

        </>
    )
}

export default Post;