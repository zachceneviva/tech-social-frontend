
import ChatCard from "../components/Message/ChatCard"
import styles from "./Messages.module.scss"


export default function Messages () {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <div className={styles.allChats}>
                        <h1>All Chats</h1>
                        <ChatCard />
                        
                    </div>    
                </div>
                <div className={styles.mainSection}>

                </div>
            </div>
        </div>
    )
}