import styles from "./ProfileHeader.module.scss";

export default function ProfileHeader () {
    return (
        <div className={styles.header}>
            <div className={styles.bannerImage}>
                <img src="https://www.nashvilleroot.com/wp-content/themes/nashvilleroot/_photos/photo1.jpg" alt="banner" />
            </div>
            <div className={styles.headerContent}>
                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                <div className={styles.headerInformation}>
                    <h2>Zach Ceneviva</h2>
                    <h6>Full-Stack Software Engineer</h6>
                    <h5>Nashville, TN</h5>
                    <p>50 Techonnections</p>
                </div>
            </div>
        </div>
    )
}