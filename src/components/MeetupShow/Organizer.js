import styles from "./Organizer.module.scss"
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { userState } from "../../recoil/atom"
import { useRecoilState } from "recoil"
import axios from "axios"

export default function Organizer (props) {
    const [user, setUser] = useRecoilState(userState)

    const createConvo = async () => {
        try {
            const createdConversation = await axios.post('https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/conversations', {members: [user._id, props.meetup.creator._id]})
            const updateUser = await axios.put(`https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/users/${user._id}`, {conversationsWith: [props.meetup.creator._id, ...user.conversationsWith]}, {headers: {authorization: `Bearer ${localStorage.uid}`}})
            .then(res => setUser(res.data.updatedUser))
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