import { useEffect, useState } from 'react';
import { Link, useSearchParams } from "react-router";

import styles from './Post.module.scss';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';

function Post() {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(() => {
        return parseInt(searchParams.get('page'), 10) || 1;
    });
    const [totalPage, setTotalPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
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
            })
            .finally(() => {
                setLoading(false);
            });
    }, [page, itemsPerPage]);

    useEffect(() => {
        setSearchParams({ page });
    }, [page, setSearchParams]);

    const handleChangePage = (page) => {
        setPage(page);
    }

    const handleChangeItemsPerPage = (itemsPerPage) => {
        setItemsPerPage(itemsPerPage);
        setPage(1);
    }


    return (

        <div className={styles.container}>
            <h1 className={styles.page_title}>Posts</h1>
            {
                loading ? <Loading /> : (
                    <>
                        {
                            posts.map((post) => {
                                return (
                                    <div className={styles.item} key={post.id}>
                                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
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
                    </>
                )
            }
        </div>


    )
}

export default Post;