import styles from "./ProfileHeader.module.scss";


export default function ProfileHeader (props) {
    const user = props.user
    console.log(user)

    return (
        <div className={styles.header}>
            <div className={styles.bannerImage}>
                <img src={user.coverPhoto} alt="banner" />
            </div>
            <div className={styles.headerContent}>
                <img src={user.avatar} alt="user" />
                <div className={styles.headerInformation}>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <h6>Full-Stack Software Engineer</h6>
                    <h5>{user.city}, {user.state}</h5>
                    <p>{user.techonnections.length} Techonnections</p>
                </div>
            </div>
        </div>
    )
}