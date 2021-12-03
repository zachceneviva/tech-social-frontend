import React, { useState, useEffect, useRef } from "react";
import ConversationMessage from "../components/Message/ConversationMessage";
import styles from "./Messages.module.scss";
import { userState } from "../recoil/atom";
import { useRecoilState } from "recoil";
import ChatInput from "../components/Message/ChatInput";
import axios from "axios";
import { useParams } from "react-router";
import {io} from "socket.io-client"

export default function Conversation() {
    const user = useRecoilState(userState)[0];
    const params = useParams()
    const [allMessage, setAllMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [arrivalMessage, setArrivalMessage] = useState(null)
    const [currentChat, setCurrentChat] = useState(null)
    const socket = useRef()
    const scrollRef = useRef()


    useEffect(() => {
        socket.current = io("ws://localhost:8000");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: {
                    _id: data.sender.senderId,
                    avatar: data.sender.avatar,
                    fullName: data.sender.fullName,
                },
                text: data.text,
            })
        })
        return function cleanup() {
            socket.current.disconnect()
            }
    },[])

    useEffect(() => {
        arrivalMessage &&
        currentChat?.members.includes(arrivalMessage.sender._id) &&
        setAllMessages((prev) => [...prev, arrivalMessage])
    },[arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit("addUser", user._id)
    },[user])

    useEffect(() => {
        const getConversation = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/v1/techonnect/conversations/find/${params.id}`)
                setCurrentChat(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        getConversation()
    },[params.id])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/v1/techonnect/messages/${params.id}`)
                setAllMessages(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        getMessages()
    }, [currentChat])


    const handleSend = async (e) => {
        e.preventDefault()
        
        const receiverId = currentChat.members.find((member) => member !== user._id)
            socket.current.emit("sendMessage", {
                senderId: user._id,
                avatar: user.avatar,
                fullName: `${user.firstName} ${user.lastName}`,
                receiverId,
                text: newMessage,
            }) 
        
        try {
            const res = await axios.post(`http://localhost:4000/api/v1/techonnect/messages`, {
                conversationId: params.id,
                sender: {
                    _id: user._id,
                    avatar: user.avatar,
                    fullName: `${user.firstName} ${user.lastName}`,
                },
                text: newMessage,
            })
            setAllMessages([...allMessage, res.data.newMessage])
            console.log(allMessage)
            setNewMessage('')
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setNewMessage(e.target.value)
    }

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [allMessage]);

    const messages = allMessage.map((message, idx) => {
        return (
            <li className={styles.messageListItem} ref={scrollRef}>
                <ConversationMessage message={message} own={message.sender._id === user._id} key={idx} />
            </li>
        )
    })

    return (
        <div className={styles.chatArea}>
            <div className={styles.messagesContainer}>
                <ul className={styles.messageList}>
                    {!currentChat && !allMessage && !arrivalMessage ? "Loading" : messages}
                </ul>
            </div>
            <div className={styles.messageInput}>
                <ChatInput handleChange={handleChange} message={newMessage} handleSend={handleSend}/>
            </div>
        </div>
    );
}
