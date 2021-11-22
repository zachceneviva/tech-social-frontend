import styles from "./Profile.module.scss";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Meetup from "../components/Feed/Meetup";
import Post from "../components/Feed/Post";
import PeopleBanner from "../components/Feed/PeopleBanner";
import GroupsBanner from "../components/Feed/GroupsBanner";

export default function Profile () {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <ProfileHeader />
            </div>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <PeopleBanner />
                </div>
                <div className={styles.mainSection}>
                    <Post />
                </div>
                <div className={styles.rightSection} >
                    <Meetup />
                    <GroupsBanner />
                </div>
            </div>
        </div>
    )
}