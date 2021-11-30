import styles from "./ProfileHeader.module.scss";
import { userState } from "../../recoil/atom";
import { useRecoilState } from "recoil";

export default function ProfileHeader () {
    const user = useRecoilState(userState)[0]

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