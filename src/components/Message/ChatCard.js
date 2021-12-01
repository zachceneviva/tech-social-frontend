
import styles from './ChatCard.module.scss'

export default function ChatCard (props) {

    return (
        <div className={styles.chatCard}>
                <div className={styles.chatUserImage}>
                    <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                </div>
                <div className={styles.chatUserName}>
                    <h4>Zach Ceneviva</h4>
                    <p>Last Messaged 11/15/21</p>
                </div>
            </div>
    )
}