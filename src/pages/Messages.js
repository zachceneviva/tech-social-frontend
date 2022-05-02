import React, {useState, useEffect} from "react"
import ChatCard from "../components/Message/ChatCard"
import styles from "./Messages.module.scss"
import { userState } from "../recoil/atom"
import { useRecoilState } from "recoil"
import axios from "axios"
import { Outlet} from "react-router"
import { NavLink } from "react-router-dom"
import { getAllConversations } from "../lib/ApiCalls"


export default function Messages () {
    const [allConvos, setAllConvos] = useState([])
    const user = useRecoilState(userState)[0]

    useEffect(() => {
        getConvos()
    }, [])

    const getConvos = async () => {
        try {
            let allConvos = await getAllConversations(user._id)
            setAllConvos(allConvos)
        } catch(e) {
            console.log(e)
        }
    }

    const convos = allConvos.map((convo, idx) => {
        return (
            <NavLink style={{textDecoration: "none"}} to={`/messages/${convo._id}`}  key={idx}>
                <ChatCard convo={convo}/>
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
                    <div className={styles.smallScreen}>
                        <div className={styles.allChats}>
                            <h1>All Chats</h1>
                                {convos ? convos : "Loading"}
                        </div> 
                    </div>
                <Outlet />
                </div>
            </div>
        </div>
    )
}