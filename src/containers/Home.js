import styles from "./Home.module.scss"
import Feed from "./Feed"
import Navigation from "../components/Navbar"

export default function Home () {
    return (
        <div className={styles.mainContainer}>
            <Navigation/>
            <div className={styles.mainSection}>
                <Feed/>
            </div>
        </div>
    )
}