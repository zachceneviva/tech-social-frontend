
import styles from "./Meetup.module.scss"
import { format } from "date-fns"
import { Link } from "react-router-dom"

export default function MeetupBanner (props) {

    const meetup = props.meetups.map((meetup, idx) => {
        return (
            <div className={styles.people}>
                <div className={styles.meetupDate}>
                    <h4>{format(new Date(meetup.date), 'd')}</h4>
                    <p>{format(new Date(meetup.date), 'LLL')}</p>
                </div>
                <div className={styles.userInfo}>
                    <Link to={`/meetup/${meetup._id}`}>
                        <h4>{meetup.name}</h4>
                    </Link>
                    <h6>{meetup.address.toLowerCase() === "virtual" ? meetup.address : `${meetup.city}, ${meetup.state}`}</h6>
                </div>
            </div>
        )
    })

    return (
        <div className={styles.peopleBannerCard}>
            <h2>{props.title}</h2>
            <hr/>
            {meetup}
        </div>
    )
}