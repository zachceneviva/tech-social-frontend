import styles from "./AllGroups.module.scss"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import Groups from "../components/AllGroups/Groups"

export default function AllGroups () {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard/>
                </div>
                <div className={styles.mainSection}>
                    <Groups />
                </div>
            </div>
        </div>
    )
}