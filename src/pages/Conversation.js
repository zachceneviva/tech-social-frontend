import React, { useState, useEffect } from "react";
import ConversationMessage from "../components/Message/ConversationMessage";
import styles from "./Messages.module.scss";
import { userState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import ChatInput from "../components/Message/ChatInput";
import axios from "axios";

export default function Conversation() {
    const user = useRecoilState(userState)[0];

    return (
        <div className={styles.chatArea}>
            <div className={styles.messagesContainer}>
                <ul className={styles.messageList}>
                    <li className={styles.messageListItem}>
                        <ConversationMessage userMessage={true} />
                    </li>
                    <li className={styles.messageListItem}>
                        <ConversationMessage />
                    </li>
                </ul>
            </div>
            <div className={styles.messageInput}>
                <ChatInput />
            </div>
        </div>
    );
}
