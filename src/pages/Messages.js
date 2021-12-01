import React, {useState, useEffect} from "react"
import ChatCard from "../components/Message/ChatCard"
import ConversationMessage from "../components/Message/ConversationMessage"
import styles from "./Messages.module.scss"
import { userState } from "../recoil/atom"
import { useRecoilState } from "recoil"
import ChatInput from "../components/Message/ChatInput"
import axios from "axios"
import { Outlet} from "react-router"
import { NavLink } from "react-router-dom"


export default function Messages () {
    const [allConvos, setAllConvos] = useState([])
    const user = useRecoilState(userState)[0]

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/techonnect/conversations/${user._id}`)
        .then(res => setAllConvos(res.data.allConversations))
        console.log("fetched")
    }, [])

    const convos = allConvos.map((convo, idx) => {
        return (
            <NavLink style={{textDecoration: "none"}} to={`/messages/${convo._id}`}>
                <ChatCard convo={convo} key="idx" />
            </NavLink>
        )   
    })
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <div className={styles.allChats}>
                        <h1>All Chats</h1>
                            {convos ? convos : "Loading"}
                    </div>    
                </div>
                <div className={styles.mainSection}>
                <Outlet />
                    {/* <div className={styles.chatArea}>
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
                        <div className={styles.messageInput}>
                            <ChatInput />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}