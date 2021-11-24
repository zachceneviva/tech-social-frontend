import styles from "./Comment.module.scss"
import { formatDistanceToNow }from "date-fns"

export default function Comment (props) {
    return (
            <div className={styles.commentCard}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="comment" />
                <div className={styles.commentContent}>
                    <div className={styles.commentUserName}>
                        <h4>Nicholas Ceneviva</h4>
                        <p>{formatDistanceToNow(new Date(props.comment.createdAt))} ago</p>
                    </div>
                    <p>{props.comment.content}</p>
                </div>
            </div>
    )
}