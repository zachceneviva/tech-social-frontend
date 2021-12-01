import styles from "./Organizer.module.scss"
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { userState } from "../../recoil/atom"
import { useRecoilState } from "recoil"
import axios from "axios"

export default function Organizer (props) {
    const user = useRecoilState(userState)[0]

    const createConvo = async () => {
        try {
            const createdConversation = await axios.post('http://localhost:4000/api/v1/techonnect/conversations', {members: [user._id, props.meetup.creator._id]})
            console.log(createdConversation.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.organizer}>
            <img src={props.meetup.creator.avatar} alt="user" />
            <a href={`/profile/${props.meetup.creator._id}`}><h4>{props.meetup.creator.firstName} {props.meetup.creator.lastName}</h4></a>
            <p>{props.meetup.creator.city}, {props.meetup.creator.state}</p>
            <Link to={`/messages`}>
                <Button onClick={createConvo} className={styles.messageBtn}>Message</Button>
            </Link>
        </div>
    )
}