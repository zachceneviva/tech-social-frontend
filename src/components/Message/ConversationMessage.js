import styles from "./ConversationMessage.module.scss";

export default function ConversationMessage(props) {
    return (
        <>
        {props.userMessage ?
            <div className={styles.userTextCard}>
                <div className={styles.userMessageText}>
                    <p>Text content </p>
                </div>
                <div className={styles.userMessengerImage}>
                    <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="messenger" />
                </div>
            </div> :

        <div className={styles.textCard}>
            <div className={styles.messengerImage}>
                <img
                    src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                    alt="messenger"
                />
            </div>
            <div className={styles.messageText}>
                <p>Text content</p>
            </div>
        </div> }
        </>
    );
}
