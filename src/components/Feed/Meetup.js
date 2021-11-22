import { propTypes } from "react-bootstrap/esm/Image"
import styles from "./Meetup.module.scss"

export default function Meetup (props) {
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
            <div className={styles.people}>
            <div className={styles.meetupDate}>
                    <h4>23</h4>
                    <p>Nov</p>
                </div>
                <div className={styles.userInfo}>
                    <h4>Algo Night</h4>
                    <h6>San Francisco, CA</h6>
                </div>
            </div>
            <div className={styles.people}>
            <div className={styles.meetupDate}>
                    <h4>13</h4>
                    <p>Feb</p>
                </div>
                <div className={styles.userInfo}>
                    <h4>Code Sesh</h4>
                    <h6>Nashville, TN</h6>
                </div>
            </div>
            <div className={styles.people}>
            <div className={styles.meetupDate}>
                    <h4>1</h4>
                    <p>Dec</p>
                </div>
                <div className={styles.userInfo}>
                    <h4>Code Rodeo</h4>
                    <h6>Austin, TX</h6>
                </div>
            </div>
            <div className={styles.people}>
            <div className={styles.meetupDate}>
                    <h4>8</h4>
                    <p>Jan</p>
                </div>
                <div className={styles.userInfo}>
                    <h4>Monthly Meetup</h4>
                    <h6>Washington, DC</h6>
                </div>
            </div>
        </div>
    )
}