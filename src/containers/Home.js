import styles from "./Home.module.scss"
import Feed from "./Feed"

export default function Home () {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainSection}>
                <Feed/>
            </div>
        </div>
    )
}