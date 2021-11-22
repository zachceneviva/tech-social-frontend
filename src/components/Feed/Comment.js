import styles from "./Comment.module.scss"

export default function Comments () {
    return (
        <div className={styles.comments}>
            <div className={styles.commentCard}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="comment" />
                <div className={styles.commentContent}>
                    <div className={styles.commentUserName}>
                        <h4>Nicholas Ceneviva</h4>
                        <p>3 hours ago</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}