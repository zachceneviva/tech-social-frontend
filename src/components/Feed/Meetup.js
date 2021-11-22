import styles from "./Meetup.module.scss"

export default function Meetup () {
    return (
        <div className={styles.peopleBannerCard}>
            <h2>Top Meetups!</h2>
            <hr/>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Code and Coffee</h4>
                    <h6>Philadelphia, PA</h6>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Algo Night</h4>
                    <h6>San Francisco, CA</h6>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Code Sesh</h4>
                    <h6>Nashville, TN</h6>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Code Rodeo</h4>
                    <h6>Austin, TX</h6>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Monthly Meetup</h4>
                    <h6>Washington, DC</h6>
                </div>
            </div>
        </div>
    )
}