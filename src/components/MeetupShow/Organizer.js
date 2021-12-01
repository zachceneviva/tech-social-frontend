import styles from "./Organizer.module.scss"
import {Button} from 'react-bootstrap'

export default function Organizer (props) {

    return (
        <div className={styles.organizer}>
            <img src={props.meetup.creator.avatar} alt="user" />
            <h4>{props.meetup.creator.firstName} {props.meetup.creator.lastName}</h4>
            <p>{props.meetup.creator.city}, {props.meetup.creator.state}</p>
            <Button className={styles.messageBtn}>Message</Button>
        </div>
    )
}