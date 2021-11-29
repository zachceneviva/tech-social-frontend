
import styles from "./Comment.module.scss"
import { formatDistanceToNow }from "date-fns"

export default function Comment (props) {

    return (
            <div className={styles.commentCard}>
                <img src={props.comment.user.avatar} alt="comment" />
                <div className={styles.commentContent}>
                    <div className={styles.commentUserName}>
                        <h4>{props.comment.user.firstName} {props.comment.user.lastName}</h4>
                        <p>{formatDistanceToNow(new Date(props.comment.createdAt))} ago</p>
                    </div>
                    <p>{props.comment.content}</p>
                </div>
            </div>
    )
}