import React, { useState, useEffect } from "react";
import ConversationMessage from "../components/Message/ConversationMessage";
import styles from "./Messages.module.scss";
import { userState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import ChatInput from "../components/Message/ChatInput";
import axios from "axios";
import { useParams, useResolvedPath } from "react-router";

export default function Conversation() {
    const user = useRecoilState(userState)[0];
    const params = useParams()
    const [allMessage, setAllMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [busy, setBusy] = useState(true)
    const [callBack, setCallback] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/techonnect/messages/${params.id}`)
        .then(res => setAllMessages(res.data))
        setBusy(false)
        console.log("fetched")
    },[busy])

    const handleSend = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/api/v1/techonnect/messages`, {
            conversationId: params.id,
            sender: user._id,
            text: newMessage,
        }).then(res => console.log(res))
        setNewMessage('')
        setBusy(true)
    }

    const handleChange = (e) => {
        setNewMessage(e.target.value)
    }


    const messages = allMessage.map((message, idx) => {
        return (
            <li className={styles.messageListItem}>
                <ConversationMessage message={message} key={idx} />
            </li>
        )
    })

    return (
        <div className={styles.chatArea}>
            <div className={styles.messagesContainer}>
                <ul className={styles.messageList}>
                    {!allMessage ? "Loading" : messages}
                </ul>
            </div>
            <div className={styles.messageInput}>
                <ChatInput handleChange={handleChange} message={newMessage} handleSend={handleSend}/>
            </div>
        </div>
    );
}
