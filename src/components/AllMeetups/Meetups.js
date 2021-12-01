import styles from "./Meetups.module.scss"
import { Button } from "react-bootstrap"
import { format } from "date-fns"

export default function Meetups (props) {
    return (
            <div className={styles.allGroupsCard}>
                <img src={props.meetup.photo} alt="user" />
                <div className={styles.allGroupsContent}>
                    <div className={styles.groupRole}>
                        <h4>{props.meetup.name}</h4>
                        <h6>{!props.meetup.city && !props.meetup.state ? props.meetup.address : `${props.meetup.city}, ${props.meetup.state}`}</h6>
                        <p>{format(new Date(props.meetup.date), 'MM/dd/yyyy')}</p>
                    </div>
                <Button className={styles.viewBtn} href={`/meetup/${props.meetup._id}`}>View</Button>
                </div>
            </div>
    )
}