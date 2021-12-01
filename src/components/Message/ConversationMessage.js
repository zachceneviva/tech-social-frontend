import React, {useState, useEffect} from "react";
import styles from "./ConversationMessage.module.scss";
import { userState } from "../../recoil/atom";
import { useRecoilState } from "recoil";

export default function ConversationMessage(props) {
    const user = useRecoilState(userState)[0]


    return (
        <>
        {props.message.sender._id === user._id ?
            <div className={styles.userTextCard}>
                <div className={styles.userMessageText}>
                    <p>{props.message.text}</p>
                </div>
                <div className={styles.userMessengerImage}>
                    <img src={props.message.sender.avatar} alt="messenger" />
                </div>
            </div> :

        <div className={styles.textCard}>
            <div className={styles.messengerImage}>
                <img
                    src={props.message.sender.avatar}
                    alt="messenger"
                />
            </div>
            <div className={styles.messageText}>
                <p>{props.message.text}</p>
            </div>
        </div>}
        
        </>
    );
}
