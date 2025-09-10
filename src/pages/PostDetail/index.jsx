import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './PostDetail.module.scss';
import Loading from '../../components/Loading';

function PostDetail() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
                .then((res) => {
                    if(!res.ok){
                        navigate("/posts", { replace: true });
                        return;
                    }
                    return res.json();
                }),
            fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
                .then((res) => {
                    return res.json();
                }),
        ]).then(([postData, commentsData]) => {
            setPost(postData);
            setComments(commentsData);
        })
            .finally(() => {
                setLoading(false);
            });
    }, [params.id]);

    return (

        <div className={styles.container}>
            <h1 className={styles.page_title}>Post Detail</h1>
            {loading ? <Loading /> : (
                <>
                    <div className={styles.post_wrapper}>
                        <div className={styles.post}>
                            <h2 className={styles.post_title}>{post.title}</h2>
                            <p className={styles.post_content}>{post.body}</p>
                        </div>
                        <div className={styles.comment_list}>
                            <h3 className={styles.comment_title}>Comments</h3>
                            {
                                comments.map((comment) => (
                                    <div className={styles.comment_item} key={comment.id}>
                                        <h4 className={styles.comment_name}>{comment.name}</h4>
                                        <div className={styles.comment_meta}>
                                            By <span className={styles.comment_email}>{comment.email}</span>
                                        </div>
                                        <p>{comment.body}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>
            )}
        </div>

    )
}

export default PostDetail;