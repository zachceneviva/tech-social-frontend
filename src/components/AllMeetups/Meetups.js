import styles from "./Meetups.module.scss"
import { Button } from "react-bootstrap"
import { format } from "date-fns"
import { Link } from "react-router-dom"

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
                <Link to={`/meetup/${props.meetup._id}`}>
                    <Button className={styles.viewBtn}>View</Button>
                </Link>
                </div>
            </div>
    )
}