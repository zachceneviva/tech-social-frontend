import styles from "./Organizer.module.scss"
import {Button} from 'react-bootstrap'

export default function Organizer (props) {

    return (
        <div className={styles.organizer}>
            <img src={props.meetup.creator.avatar} alt="user" />
            <a href={`/profile/${props.meetup.creator._id}`}><h4>{props.meetup.creator.firstName} {props.meetup.creator.lastName}</h4></a>
            <p>{props.meetup.creator.city}, {props.meetup.creator.state}</p>
            <Button className={styles.messageBtn}>Message</Button>
        </div>
    )
}