
import styles from './ChatCard.module.scss'
import {format} from 'date-fns'

export default function ChatCard (props) {

    return (
        <div className={styles.chatCard}>
                <div className={styles.chatUserImage}>
                    <img src={props.convo.members[1].avatar} alt="user" />
                </div>
                <div className={styles.chatUserName}>
                    <h4>{props.convo.members[1].firstName} {props.convo.members[1].lastName}</h4>
                    <p>Started {format(new Date(props.convo.createdAt), 'MM/dd/yyyy')}</p>
                </div>
            </div>
    )
}