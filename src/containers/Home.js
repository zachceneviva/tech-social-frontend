import styles from "./Home.module.scss"
import Feed from "./Feed"
import Navigation from "../components/Navbar"
import BannerProfileCard from "../components/Feed/BannerProfileCard"

export default function Home () {
    return (
        <div className={styles.mainContainer}>
            <Navigation/>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard/>
                </div>
                <div className={styles.mainSection}>
                    <Feed/>
                </div>
                <div className={styles.rightSection} >
                    
                </div>
            </div>
        </div>
    )
}