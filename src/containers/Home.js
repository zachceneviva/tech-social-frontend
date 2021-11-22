import styles from "./Home.module.scss"
import Feed from "./Feed"
import Navigation from "../components/Navbar"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import PeopleBanner from "../components/Feed/PeopleBanner"

export default function Home () {
    return (
        <div className={styles.mainContainer}>
            <Navigation/>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard/>
                    <PeopleBanner />
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