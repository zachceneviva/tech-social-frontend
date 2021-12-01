import { propTypes } from "react-bootstrap/esm/Image"
import styles from "./Meetup.module.scss"

export default function MeetupBanner (props) {
    return (
        <div className={styles.peopleBannerCard}>
            <h2>{props.title}</h2>
            <hr/>
            <div className={styles.people}>
                <div className={styles.meetupDate}>
                    <h4>23</h4>
                    <p>Jun</p>
                </div>
                <div className={styles.userInfo}>
                    <h4>Code and Coffee</h4>
                    <h6>Philadelphia, PA</h6>
                </div>
            </div>
        </div>
    )
}