import styles from "./BannerProfile.module.scss"
import { BsPeopleFill, BsPlusCircleFill } from "react-icons/bs"

export default function BannerProfileCard () {
    return (
        <div className={styles.profileCard}>
            <h2>Zach Ceneviva</h2>
            <h4>Nashville, TN</h4>
            <h6>100 followers | 50 following</h6>
            <hr/>
            <div className={styles.create}>
                <p><BsPeopleFill/></p>
                <h4>Find Connections</h4>
            </div>
            <hr/>
            <div className={styles.create}>
                <p><BsPlusCircleFill/></p>
                <h4>Create a group</h4>
            </div>
            <hr/>
            <div className={styles.create}>
                <p><BsPlusCircleFill/></p>
                <h4>Create a meetup</h4>
            </div>
        </div>
    )
}