import React from "react"
import styles from "./GroupsBanner.module.scss"

export default function GroupsBanner (props) {
    return (
        <div className={styles.peopleBannerCard}>
            <h2>{ props.title }</h2>
            <hr/>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>willCodeForFood</h4>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Coding Ninjas</h4>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>GA Rockstars</h4>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>HackerRank Assassins</h4>
                </div>
            </div>
            <div className={styles.people}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.userInfo}>
                    <h4>Git dat Money</h4>
                </div>
            </div>
        </div>
    )
}