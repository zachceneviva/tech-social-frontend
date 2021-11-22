import styles from "./AllMeetups.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import Meetups from "../components/AllMeetups/Meetups"

export default function AllMeetups () {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard/>
                </div>
                <div className={styles.mainSection}>
                    <Meetups />
                </div>
            </div>
        </div>
    )
}