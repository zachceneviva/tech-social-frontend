import styles from "./PeopleBanner.module.scss"
import { Link } from "react-router-dom"

export default function PeopleBanner (props) {


    const techonnection = props.user.techonnections.map((techonnect, idx) => {
        return (
            <div className={styles.people} key={idx}>
                <img src={techonnect.avatar} alt="user" />
                <div className={styles.userInfo}>
                    <Link to={`/profile/${techonnect._id}`}>
                        <h4>{techonnect.firstName} {techonnect.lastName}</h4>
                    </Link>
                    <h6>{techonnect.city}, {techonnect.state}</h6>
                </div>
            </div>
        )
    }) 

    return (
        <div className={styles.peopleBannerCard}>
            <h2>Check-In</h2>
            <hr/>
            {props.user.techonnections.length > 0 ? techonnection : <p>No techonnections yet</p>}
        </div>
    )
}