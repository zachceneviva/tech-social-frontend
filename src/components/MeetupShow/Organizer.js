import styles from "./Organizer.module.scss"
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { userState } from "../../recoil/atom"
import { useRecoilState } from "recoil"
import { createNewConversation, updateProfile } from "../../lib/ApiCalls"

export default function Organizer (props) {
    const [user, setUser] = useRecoilState(userState)

    const createConvo = async () => {
        try {
            const [conversation, updatedUser] = await Promise.all([
                createNewConversation({
                    members: [user._id, props.meetup.creator._id]
                }),
                updateProfile(user._id, {
                    conversationsWith: [props.meetup.creator._id, ...user.conversationsWith]
                })
            ])
            setUser(updatedUser)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.organizer}>
            <img src={props.meetup.creator.avatar} alt="user" />
            <a href={`/profile/${props.meetup.creator._id}`}><h4>{props.meetup.creator.firstName} {props.meetup.creator.lastName}</h4></a>
            <p>{props.meetup.creator.city}, {props.meetup.creator.state}</p>
            {user._id === props.meetup.creator._id ? null :
            <Link to={`/messages`}>
                <Button onClick={createConvo} className={styles.messageBtn}>Message</Button>
            </Link>
            }
        </div>
    )
}