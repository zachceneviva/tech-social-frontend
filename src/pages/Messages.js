import React, {useState} from "react"
import ChatCard from "../components/Message/ChatCard"
import ConversationMessage from "../components/Message/ConversationMessage"
import styles from "./Messages.module.scss"
import { userState } from "../recoil/atom"
import { useRecoilState } from "recoil"


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
                    <div className={styles.chatArea}>
                        <div className={styles.messagesContainer}>
                            <ul className={styles.messageList}>
                                <li className={styles.messageListItem}>
                                    <ConversationMessage userMessage={true}/>
                                </li>
                                <li className={styles.messageListItem}>
                                    <ConversationMessage />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}