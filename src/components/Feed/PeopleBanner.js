import styles from "./PeopleBanner.module.scss"

export default function PeopleBanner () {
    return (
        <div className={styles.peopleBannerCard}>
            <h2>Check-In</h2>
            <hr/>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Matthew Ceneviva</h4>
                    <h6>Philadelphia, PA</h6>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Matthew Ceneviva</h4>
                    <h6>Philadelphia, PA</h6>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Matthew Ceneviva</h4>
                    <h6>Philadelphia, PA</h6>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Matthew Ceneviva</h4>
                    <h6>Philadelphia, PA</h6>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Matthew Ceneviva</h4>
                    <h6>Philadelphia, PA</h6>
                </div>
            </div>
        </div>
    )
}