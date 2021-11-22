import React, {useState} from "react"
import styles from "./Home.module.scss"
import Feed from "../containers/Feed"
import BannerProfileCard from "../components/Feed/BannerProfileCard"
import PeopleBanner from "../components/Feed/PeopleBanner"
import GroupsBanner from "../components/Feed/GroupsBanner"
import MeetupBanner from "../components/Feed/MeetupBanner"

export default function Home () {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContentContainer}>
                <div className={styles.leftSection} >
                    <BannerProfileCard/>
                    <PeopleBanner />
                </div>
                <div className={styles.mainSection}>
                    <Feed/>
                </div>
                <div className={styles.rightSection} >
                    <MeetupBanner title="Top Meetups"/>
                    <GroupsBanner title="Top Groups"/>
                </div>
            </div>
        </div>
    )
}