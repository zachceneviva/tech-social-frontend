import React, {useEffect, useState} from 'react'
import styles from './ChatCard.module.scss'
import {format} from 'date-fns'
import { useParams } from 'react-router'
import { userState } from '../../recoil/atom'
import { useRecoilState } from 'recoil'

export default function ChatCard (props) {
    const params = useParams()
    const[member, setMember] = useState(null)
    const user = useRecoilState(userState)[0]

    useEffect(() => {
        if (props.convo.members[0]._id === user._id) {
            setMember(props.convo.members[1])
        } else {
            setMember(props.convo.members[0])
        }
    }, [])
    

    return (
        <>
        { !member ? "Loading..." :
        <div className={params.id === props.convo._id ? styles.activeChatCard : styles.chatCard}>
                <div className={styles.chatUserImage}>
                    <img src={member.avatar} alt="user" />
                </div>
                <div className={styles.chatUserName}>
                    <h4>{member.firstName} {member.lastName}</h4>
                    <p>Started {format(new Date(props.convo.createdAt), 'MM/dd/yyyy')}</p>
                </div> 
        </div>
}
        </>
    )
}